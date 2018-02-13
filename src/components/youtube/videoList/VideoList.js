import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VideoItem from 'components/youtube/videoItem';
import './VideoList.css';

export default class VideoList extends Component {
  static props = {
    videos: PropTypes.arrayOf(PropTypes.object), // TODO: improve types here
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string
  };

  render() {
    const { videos } = this.props;
    return (
      <div className="VideoList-container">
        {videos.map(video => <VideoItem key={video.id} item={video} />)}
      </div>
    );
  }
}
