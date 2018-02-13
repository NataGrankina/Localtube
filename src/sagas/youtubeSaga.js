import { call, put, takeLatest } from 'redux-saga/effects';
import {
  LOAD_VIDEOS_BY_LOCATION,
  loadVideosByLocationSuccess,
  loadVideosByLocationFailure
} from 'actions/youtubeActions';
import services from 'services';

const { videosSevice } = services;

function* loadVideosByLocation({ lat, lng, radius }) {
  try {
    const videos = yield call(
      videosSevice.loadVideosByLocation,
      lat,
      lng,
      radius
    );
    yield put(loadVideosByLocationSuccess(videos));
  } catch (error) {
    yield put(loadVideosByLocationFailure(error.message));
  }
}

export default function* watchLoadVideosByLocation() {
  yield takeLatest(LOAD_VIDEOS_BY_LOCATION.REQUEST, loadVideosByLocation);
}
