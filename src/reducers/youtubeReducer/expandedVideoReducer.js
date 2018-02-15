import {
  LOAD_VIDEO_RATING,
  EXPAND_VIDEO_DETAILS,
  RATE_VIDEO
} from 'actions/youtubeActions';
import { VIDEO_RATING_TYPES } from 'utils';

const initialState = {
  id: null,
  statistics: null,
  userRating: null,
  isLoading: false,
  error: null
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case EXPAND_VIDEO_DETAILS:
      return {
        ...initialState,
        id: action.id,
        isLoading: true
      };
    case LOAD_VIDEO_RATING.REQUEST:
      if (action.id === state.id) {
        return {
          ...state,
          statistics: null,
          userRating: null,
          isLoading: true,
          error: null
        };
      }
      return state;
    case LOAD_VIDEO_RATING.SUCCESS:
      if (action.id === state.id) {
        return {
          ...state,
          statistics: action.rating.statistics,
          userRating: action.rating.userRating,
          isLoading: false,
          error: null
        };
      }
      return state;
    case LOAD_VIDEO_RATING.FAILURE:
      if (action.id === state.id) {
        if (action.id === state.id) {
          return {
            ...state,
            isLoading: false,
            error: action.error
          };
        }
      }
      return state;
    case RATE_VIDEO.SUCCESS:
      if (action.id === state.id) {
        let { statistics: { likeCount, dislikeCount } } = state;
        const { userRating } = state;
        const { rating } = action;

        userRating === VIDEO_RATING_TYPES.LIKE && likeCount--;
        userRating === VIDEO_RATING_TYPES.DISLIKE && dislikeCount--;
        rating === VIDEO_RATING_TYPES.LIKE && likeCount++;
        rating === VIDEO_RATING_TYPES.DISLIKE && dislikeCount++;

        return {
          ...state,
          statistics: {
            ...state.statistics,
            likeCount,
            dislikeCount
          },
          userRating: rating
        };
      }
      return state;
    default:
      return state;
  }
};
