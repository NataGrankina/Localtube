import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VideoItem from 'components/youtube/videoItem';
import './VideoList.css';

export default class VideoList extends Component {
  static props = {
    videos: PropTypes.arrayOf(PropTypes.object), // TODO: improve types here
    expandedVideo: PropTypes.object.isRequired, // TODO: improve types here
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    expandVideoDetails: PropTypes.func.isRequired,
    rateVideo: PropTypes.func.isRequired
  };

  render() {
    const {
      videos, expandedVideo, expandVideoDetails, rateVideo
    } = this.props;
    return (
      <div className="VideoList-container">
        {videos.map((video) => {
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
        })}
      </div>
    );
  }
}
