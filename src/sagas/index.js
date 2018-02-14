import { all, fork } from 'redux-saga/effects';
import {
  watchLoadVideosByLocation,
  watchExpandVideoDetails,
  watchLoadVideoRating,
  watchRateVideo
} from './youtubeSaga';
import watchSelectLocation from './mapSaga';
import { watchInitGoogleApi, watchLogin, watchLogout } from './authSaga';

export default function* rootSaga() {
  yield all([
    fork(watchLoadVideosByLocation),
    fork(watchExpandVideoDetails),
    fork(watchLoadVideoRating),
    fork(watchRateVideo),
    fork(watchSelectLocation),
    fork(watchInitGoogleApi),
    fork(watchLogin),
    fork(watchLogout)
  ]);
}
