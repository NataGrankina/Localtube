import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VideoItem from 'components/youtube/videoItem';
import './VideoList.css';

export default class VideoList extends Component {
  static props = {
    videos: PropTypes.arrayOf(PropTypes.object), // TODO: improve types here
    expandedVideo: PropTypes.object.isRequired, // TODO: improve types here
    resultsNumber: PropTypes.number.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isLoaded: PropTypes.bool.isRequired,
    error: PropTypes.string,
    expandVideoDetails: PropTypes.func.isRequired,
    rateVideo: PropTypes.func.isRequired
  };

  renderVideoItem = (video) => {
    const { expandedVideo, expandVideoDetails, rateVideo } = this.props;

    const { id } = expandedVideo;
    const isExpanded = id === video.id;

    const videoItemProps = {
      item: video,
      rateVideo,
      expandVideoDetails,
      isExpanded,
      details: isExpanded
        ? {
          statistics: expandedVideo.statistics,
          userRating: expandedVideo.userRating,
          isLoading: expandedVideo.isLoading
        }
        : null
    };
    return <VideoItem key={video.id} {...videoItemProps} />;
  };

  render() {
    const {
      videos, resultsNumber, isLoading, isLoaded
    } = this.props;

    if (isLoading) {
      return <h3>Loading videos list...</h3>;
    }

    if (!videos.length) {
      if (isLoaded) {
        return <h3>There are no videos for selected location</h3>;
      }
      return null;
    }

    return (
      <div className="VideoList-container">
        <h3>
          Displaying the latest {videos.length} from {resultsNumber} total
          results
        </h3>
        <div>{videos.map(this.renderVideoItem)}</div>
      </div>
    );
  }
}
