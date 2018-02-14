import { INIT_GOOGLE_API, LOGIN, LOGOUT } from 'actions/authActions';

const initialState = {
  isGoogleApiInit: false,
  isAuthorized: false,
  user: null,
  token: null,
  error: null
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case INIT_GOOGLE_API.SUCCESS:
      return {
        ...state,
        isGoogleApiInit: true,
        isAuthorized: action.isAuthorized,
        user: action.user,
        token: action.token
      };
    case LOGIN.SUCCESS:
      return {
        ...state,
        isAuthorized: action.isAuthorized,
        user: action.user,
        token: action.token
      };
    case LOGOUT.SUCCESS:
      return {
        ...state,
        isAuthorized: false,
        user: null,
        token: null
      };
    case INIT_GOOGLE_API.FAILURE:
    case LOGIN.FAILURE:
    case LOGOUT.FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};
