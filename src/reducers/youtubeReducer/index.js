import { combineReducers } from 'redux';
import videosList from './videosListReducer';
import expandedVideo from './expandedVideoReducer';

export default combineReducers({
  videosList,
  expandedVideo
});
