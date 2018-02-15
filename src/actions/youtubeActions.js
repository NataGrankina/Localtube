export const LOAD_VIDEOS_BY_LOCATION = {
  REQUEST: 'LOAD_VIDEOS_BY_LOCATION.REQUEST',
  SUCCESS: 'LOAD_VIDEOS_BY_LOCATION.SUCCESS',
  FAILURE: 'LOAD_VIDEOS_BY_LOCATION.FAILURE'
};
export const RATE_VIDEO = {
  REQUEST: 'RATE_VIDEO.REQUEST',
  SUCCESS: 'RATE_VIDEO.SUCCESS',
  FAILURE: 'RATE_VIDEO.FAILURE'
};
export const LOAD_VIDEO_RATING = {
  REQUEST: 'LOAD_VIDEO_RATING.REQUEST',
  SUCCESS: 'LOAD_VIDEO_RATING.SUCCESS',
  FAILURE: 'LOAD_VIDEO_RATING.FAILURE'
};
export const EXPAND_VIDEO_DETAILS = 'EXPAND_VIDEO_DETAILS';

export function loadVideosByLocationRequest(lat, lng, radius) {
  return {
    type: LOAD_VIDEOS_BY_LOCATION.REQUEST,
    lat,
    lng,
    radius
  };
}

export function loadVideosByLocationSuccess(videos, resultsNumber) {
  return {
    type: LOAD_VIDEOS_BY_LOCATION.SUCCESS,
    videos,
    resultsNumber
  };
}

export function loadVideosByLocationFailure(error) {
  return {
    type: LOAD_VIDEOS_BY_LOCATION.FAILURE,
    error
  };
}

export function rateVideoRequest(id, rating) {
  return {
    type: RATE_VIDEO.REQUEST,
    id,
    rating
  };
}

export function rateVideoSuccess(id, rating) {
  return {
    type: RATE_VIDEO.SUCCESS,
    id,
    rating
  };
}

export function rateVideoFailure(id, rating) {
  return {
    type: RATE_VIDEO.FAILURE,
    id,
    rating
  };
}

export function loadVideoRatingRequest(id) {
  return {
    type: LOAD_VIDEO_RATING.REQUEST,
    id
  };
}

export function loadVideoRatingSuccess(id, rating) {
  return {
    type: LOAD_VIDEO_RATING.SUCCESS,
    id,
    rating
  };
}

export function loadVideoRatingFailure(id, error) {
  return {
    type: LOAD_VIDEO_RATING.FAILURE,
    id,
    error
  };
}

// TODO: Implement collapse action
export function expandVideoDetails(id) {
  return {
    type: EXPAND_VIDEO_DETAILS,
    id
  };
}
