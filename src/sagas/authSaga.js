import { put, call, takeEvery } from 'redux-saga/effects';
import {
  INIT_GOOGLE_API,
  LOGIN,
  LOGOUT,
  initGoogleApiSuccess,
  initGoogleApiFailure,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure
} from 'actions/authActions';
import { authService } from 'services';

function* initGoogleApi() {
  try {
    const { isAuthorized, user } = yield call(authService.initGoogleApi);
    yield put(initGoogleApiSuccess(isAuthorized, user));
  } catch (error) {
    yield put(initGoogleApiFailure(error));
  }
}

function* login() {
  try {
    const { isAuthorized, user } = yield call(authService.signIn);
    yield put(loginSuccess(isAuthorized, user));
  } catch (error) {
    yield put(loginFailure(error));
  }
}

function* logout() {
  try {
    yield call(authService.signOut);
    yield put(logoutSuccess());
  } catch (error) {
    yield put(logoutFailure(error));
  }
}

export function* watchInitGoogleApi() {
  yield takeEvery(INIT_GOOGLE_API.REQUEST, initGoogleApi);
}

export function* watchLogin() {
  yield takeEvery(LOGIN.REQUEST, login);
}

export function* watchLogout() {
  yield takeEvery(LOGOUT.REQUEST, logout);
}
