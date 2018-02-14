import { all, fork } from 'redux-saga/effects';
import watchLoadVideosByLocation from './youtubeSaga';
import watchSelectLocation from './mapSaga';
import { watchInitGoogleApi, watchLogin, watchLogout } from './authSaga';

export default function* rootSaga() {
  yield all([
    fork(watchLoadVideosByLocation),
    fork(watchSelectLocation),
    fork(watchInitGoogleApi),
    fork(watchLogin),
    fork(watchLogout)
  ]);
}
