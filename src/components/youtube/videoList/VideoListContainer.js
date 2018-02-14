import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { expandVideoDetails, rateVideoRequest } from 'actions/youtubeActions';
import VideoList from './VideoList';

const mapStateToProps = (state) => {
  const {
    youtube: { videosList: { videos, isLoading, error }, expandedVideo }
  } = state;
  return {
    videos,
    expandedVideo,
    isLoading,
    error
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      expandVideoDetails,
      rateVideo: rateVideoRequest
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
