import { call, put, select } from 'redux-saga/effects';
import { loadVideoRatingSuccess } from 'actions/youtubeActions';
import { videosService } from 'services';
import { VIDEO_RATING_TYPES } from 'utils';
import { authSelector, loadVideoRating } from '../youtubeSaga';

it('loadVideoRating should retrieve auth token from state, call video service with retrieved token and provided id and dispatch LOAD_VIDEO_RATING.SUCCESS action with correct rating', () => {
  const id = 'test-id';
  const token = 'auth-token';
  const rating = VIDEO_RATING_TYPES.LIKE;
  const iterator = loadVideoRating({ id });

  expect(iterator.next().value).toEqual(select(authSelector));
  expect(iterator.next(token).value).toEqual(call(videosService.loadVideoRating, token, id));
  expect(iterator.next(rating).value).toEqual(put(loadVideoRatingSuccess(id, rating)));
});
