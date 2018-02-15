import { rateVideoSuccess } from 'actions/youtubeActions';
import { VIDEO_RATING_TYPES } from 'utils';
import reducer from '../expandedVideoReducer';

it('should correctly update all counters when dislike after like', () => {
  const id = 'test-id';
  const previousState = {
    id,
    statistics: {
      likeCount: 2,
      dislikeCount: 3
    },
    userRating: VIDEO_RATING_TYPES.DISLIKE
  };
  const action = rateVideoSuccess('test-id', VIDEO_RATING_TYPES.LIKE);

  const expectedState = {
    id,
    statistics: {
      likeCount: 3,
      dislikeCount: 2
    },
    userRating: VIDEO_RATING_TYPES.LIKE
  };

  expect(reducer(previousState, action)).toEqual(expectedState);
});

it('should correctly update all counters when undislike', () => {
  const id = 'test-id';
  const previousState = {
    id,
    statistics: {
      likeCount: 2,
      dislikeCount: 3
    },
    userRating: VIDEO_RATING_TYPES.DISLIKE
  };
  const action = rateVideoSuccess('test-id', VIDEO_RATING_TYPES.NONE);

  const expectedState = {
    id,
    statistics: {
      likeCount: 2,
      dislikeCount: 2
    },
    userRating: VIDEO_RATING_TYPES.NONE
  };

  expect(reducer(previousState, action)).toEqual(expectedState);
});

it('should not update state if video id does not equal id stored is state', () => {
  const id = 'test-id';
  const previousState = {
    id,
    statistics: {
      likeCount: 2,
      dislikeCount: 3
    },
    userRating: VIDEO_RATING_TYPES.DISLIKE
  };
  const action = rateVideoSuccess('another-test-id', VIDEO_RATING_TYPES.NONE);

  expect(reducer(previousState, action)).toEqual(previousState);
});
