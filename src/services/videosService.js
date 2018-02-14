import axios from 'axios';
import { GOOGLE_API_KEY, YOUTUBE_API_URL } from 'config';

const client = axios.create({
  baseURL: YOUTUBE_API_URL,
  timeout: 1000
});

function transformServerResponse({ data }) {
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
    .then(transformServerResponse);
}

function rateVideo(id, rating) {
  client.post('videos/rate', {
    params: {
      id,
      rating
    }
  });
}

export default {
  loadVideosByLocation,
  rateVideo
};
