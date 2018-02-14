import { call, put, takeLatest } from 'redux-saga/effects';
import {
  LOAD_VIDEOS_BY_LOCATION,
  loadVideosByLocationSuccess,
  loadVideosByLocationFailure
} from 'actions/youtubeActions';
import { videosService } from 'services';

function* loadVideosByLocation({ lat, lng, radius }) {
  try {
    const videos = yield call(
      videosService.loadVideosByLocation,
      lat,
      lng,
      radius
    );
    yield put(loadVideosByLocationSuccess(videos));
  } catch (error) {
    yield put(loadVideosByLocationFailure(error));
  }
}

export default function* watchLoadVideosByLocation() {
  yield takeLatest(LOAD_VIDEOS_BY_LOCATION.REQUEST, loadVideosByLocation);
}
