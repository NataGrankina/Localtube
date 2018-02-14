import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { rateVideo } from 'actions/youtubeActions';
import VideoList from './VideoList';

const mapStateToProps = (state) => {
  const { youtube: { videos, isLoading, error } } = state;
  return { videos, isLoading, error };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      rateVideo
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
