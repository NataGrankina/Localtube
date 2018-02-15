import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  LOAD_VIDEOS_BY_LOCATION,
  RATE_VIDEO,
  EXPAND_VIDEO_DETAILS,
  LOAD_VIDEO_RATING,
  loadVideosByLocationSuccess,
  loadVideosByLocationFailure,
  loadVideoRatingRequest,
  loadVideoRatingSuccess,
  loadVideoRatingFailure,
  rateVideoSuccess,
  rateVideoFailure
} from 'actions/youtubeActions';
import { videosService } from 'services';

export const authSelector = state => state.auth.token;

function* loadVideosByLocation({ lat, lng, radius }) {
  try {
    const { videos, resultsNumber } = yield call(
      videosService.loadVideosByLocation,
      lat,
      lng,
      radius
    );
    yield put(loadVideosByLocationSuccess(videos, resultsNumber));
  } catch (error) {
    yield put(loadVideosByLocationFailure(error));
  }
}

function* rateVideo({ id, rating }) {
  const token = yield select(authSelector);
  try {
    yield call(videosService.rateVideo, token, id, rating);
    yield put(rateVideoSuccess(id, rating));
  } catch (error) {
    alert(error); // TODO: improve it
    yield put(rateVideoFailure(id, rating));
  }
}

function* expandVideoDetails({ id }) {
  // Load video details on every expand, don't store them for already expanded videos
  // in order to always show relevant details
  yield put(loadVideoRatingRequest(id));
}

export function* loadVideoRating({ id }) {
  const token = yield select(authSelector);
  try {
    const rating = yield call(videosService.loadVideoRating, token, id);
    yield put(loadVideoRatingSuccess(id, rating));
  } catch (error) {
    yield put(loadVideoRatingFailure(id, error));
  }
}

export function* watchLoadVideosByLocation() {
  yield takeLatest(LOAD_VIDEOS_BY_LOCATION.REQUEST, loadVideosByLocation);
}

export function* watchRateVideo() {
  yield takeEvery(RATE_VIDEO.REQUEST, rateVideo);
}

export function* watchExpandVideoDetails() {
  yield takeEvery(EXPAND_VIDEO_DETAILS, expandVideoDetails);
}

export function* watchLoadVideoRating() {
  yield takeLatest(LOAD_VIDEO_RATING.REQUEST, loadVideoRating);
}
