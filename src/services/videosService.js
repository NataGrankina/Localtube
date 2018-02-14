import axios from 'axios';
import { GOOGLE_API_KEY, YOUTUBE_API_URL } from 'config';
import { VIDEO_RATING_TYPES } from 'utils';

const client = axios.create({
  baseURL: YOUTUBE_API_URL,
  timeout: 1000
});

function transformVideosResponse({ data }) {
  const { items } = data;

  return items.map((item) => {
    const {
      id: { videoId: id },
      snippet: {
        description,
        title,
        publishedAt,
        thumbnails: { default: thumbnail }
      }
    } = item;
    return {
      id,
      title,
      description,
      publishedAt,
      thumbnail
    };
  });
}

function loadVideosByLocation(ltd, lng, radius) {
  return client
    .get('/search', {
      params: {
        part: 'snippet',
        location: `${ltd},${lng}`,
        locationRadius: `${radius}km`,
        order: 'date',
        type: 'video',
        key: GOOGLE_API_KEY
      }
    })
    .then(transformVideosResponse);
}

function rateVideo(token, id, rating) {
  if (!token) {
    throw new Error('Only authorized users can rate a video. Please login.');
  }
  return client.post('videos/rate', null, {
    headers: { Authorization: token },
    params: {
      id,
      rating,
      key: GOOGLE_API_KEY
    }
  });
}

function loadVideoStatistics(id) {
  return client
    .get('videos', {
      params: {
        id,
        part: 'statistics',
        key: GOOGLE_API_KEY
      }
    })
    .then(({ data: { items } }) => items[0].statistics);
}

function loadUserVideoRating(token, id) {
  if (!token) {
    throw new Error('Only authorized users can access their ratings. Please login.');
  }

  return client
    .get('videos/getRating', {
      headers: { Authorization: token },
      params: {
        id,
        key: GOOGLE_API_KEY
      }
    })
    .then(({ data: { items } }) => items[0].rating);
}

function loadVideoRating(token, id) {
  const promises = [loadVideoStatistics(id)];
  if (token) {
    promises.push(loadUserVideoRating(token, id));
  }

  return Promise.all(promises).then(([statistics, userRating = VIDEO_RATING_TYPES.NONE]) => ({
    statistics,
    userRating
  }));
}

export default {
  loadVideosByLocation,
  loadVideoRating,
  rateVideo
};
