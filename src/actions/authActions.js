export const INIT_GOOGLE_API = {
  REQUEST: 'INIT_GOOGLE_API.REQUEST',
  SUCCESS: 'INIT_GOOGLE_API.SUCCESS',
  FAILURE: 'INIT_GOOGLE_API.FAILURE'
};

export const LOGIN = {
  REQUEST: 'LOGIN.REQUEST',
  SUCCESS: 'LOGIN.SUCCESS',
  FAILURE: 'LOGIN.FAILURE'
};

export const LOGOUT = {
  REQUEST: 'LOGOUT.REQUEST',
  SUCCESS: 'LOGOUT.SUCCESS',
  FAILURE: 'LOGOUT.FAILURE'
};

export function initGoogleApiRequest() {
  return {
    type: INIT_GOOGLE_API.REQUEST
  };
}

export function initGoogleApiSuccess(isAuthorized, user) {
  return {
    type: INIT_GOOGLE_API.SUCCESS,
    isAuthorized,
    user
  };
}

export function initGoogleApiFailure(error) {
  return {
    type: INIT_GOOGLE_API.FAILURE,
    error
  };
}

export function loginRequest() {
  return {
    type: LOGIN.REQUEST
  };
}

export function loginSuccess(isAuthorized, user) {
  return {
    type: LOGIN.SUCCESS,
    isAuthorized,
    user
  };
}

export function loginFailure(error) {
  return {
    type: LOGIN.FAILURE,
    error
  };
}

export function logoutRequest() {
  return {
    type: LOGOUT.REQUEST
  };
}

export function logoutSuccess() {
  return {
    type: LOGOUT.SUCCESS
  };
}

export function logoutFailure(error) {
  return {
    type: LOGOUT.FAILURE,
    error
  };
}
