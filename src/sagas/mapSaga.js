import { put, select, takeLatest } from 'redux-saga/effects';
import { SELECT_LOCATION, SELECT_LOCATION_RADIUS } from 'actions/mapActions';
import { loadVideosByLocationRequest } from 'actions/youtubeActions';

function* requestVideosByLocation({ type, ...location }) {
  const map = yield select(state => state.map);
  const { lat, lng, radius } = {
    ...map,
    ...location
  };
  yield put(loadVideosByLocationRequest(lat, lng, radius));
}

export default function* watchSelectLocation() {
  yield takeLatest(
    [SELECT_LOCATION, SELECT_LOCATION_RADIUS],
    requestVideosByLocation
  );
}
