import { combineReducers } from 'redux';
import map from './mapReducer';
import youtube from './youtubeReducer';

export default combineReducers({
  map,
  youtube
});
