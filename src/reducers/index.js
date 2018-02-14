import { combineReducers } from 'redux';
import map from './mapReducer';
import youtube from './youtubeReducer';
import auth from './authReducer';

export default combineReducers({
  map,
  youtube,
  auth
});
