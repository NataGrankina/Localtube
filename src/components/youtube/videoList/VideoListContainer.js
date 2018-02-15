import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { expandVideoDetails, rateVideoRequest } from 'actions/youtubeActions';
import VideoList from './VideoList';

const mapStateToProps = (state) => {
  const {
    youtube: {
      videosList: {
        videos, resultsNumber, isLoading, isLoaded, error
      },
      expandedVideo
    }
  } = state;
  return {
    videos,
    resultsNumber,
    expandedVideo,
    isLoading,
    isLoaded,
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
