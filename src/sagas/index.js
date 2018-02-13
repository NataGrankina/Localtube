import { all, fork } from 'redux-saga/effects';
import watchLoadVideosByLocation from './youtubeSaga';
import watchSelectLocation from './mapSaga';

export default function* rootSaga() {
  yield all([fork(watchLoadVideosByLocation), fork(watchSelectLocation)]);
}
