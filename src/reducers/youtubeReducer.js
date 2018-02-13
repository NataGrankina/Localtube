import { LOAD_VIDEOS_BY_LOCATION } from 'actions/youtubeActions';

const initialState = {
  videos: [],
  isLoading: false,
  error: null
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_VIDEOS_BY_LOCATION.REQUEST:
      return {
        ...initialState,
        isLoading: true
      };
    case LOAD_VIDEOS_BY_LOCATION.SUCCESS:
      return {
        ...state,
        videos: action.videos,
        isLoading: false
      };
    case LOAD_VIDEOS_BY_LOCATION.FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    default:
      return state;
  }
};
