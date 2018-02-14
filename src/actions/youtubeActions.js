export const LOAD_VIDEOS_BY_LOCATION = {
  REQUEST: 'LOAD_VIDEOS_BY_LOCATION.REQUEST',
  SUCCESS: 'LOAD_VIDEOS_BY_LOCATION.SUCCESS',
  FAILURE: 'LOAD_VIDEOS_BY_LOCATION.FAILURE'
};
export const RATE_VIDEO = 'RATE_VIDEO';

export function loadVideosByLocationRequest(lat, lng, radius) {
  return {
    type: LOAD_VIDEOS_BY_LOCATION.REQUEST,
    lat,
    lng,
    radius
  };
}

export function loadVideosByLocationSuccess(videos) {
  return {
    type: LOAD_VIDEOS_BY_LOCATION.SUCCESS,
    videos
  };
}

export function loadVideosByLocationFailure(error) {
  return {
    type: LOAD_VIDEOS_BY_LOCATION.FAILURE,
    error
  };
}

export function rateVideo(id, rate) {
  return {
    type: RATE_VIDEO,
    id,
    rate
  };
}
