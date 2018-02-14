import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { VIDEO_RATING_TYPES } from 'utils';
import './VideoItem.css';

// TODO: Consider to exract expanded state in a different component
export default class VideoItem extends Component {
  static props = {
    item: PropTypes.object, // TODO: improve types here,
    isExpanded: PropTypes.bool.isRequired,
    details: PropTypes.object,
    expandVideoDetails: PropTypes.func.isRequired,
    rateVideo: PropTypes.func.isRequired
  };

  rateVideo(rating) {
    const calculatedRating =
      rating === this.props.details.userRating
        ? VIDEO_RATING_TYPES.NONE
        : rating;
    this.props.rateVideo(this.props.item.id, calculatedRating);
  }

  expandDetails = () => {
    this.props.expandVideoDetails(this.props.item.id);
  };

  like = () => {
    this.rateVideo(VIDEO_RATING_TYPES.LIKE);
  };

  dislike = () => {
    this.rateVideo(VIDEO_RATING_TYPES.DISLIKE);
  };

  renderDetails() {
    if (!this.props.isExpanded) {
      return <button onClick={this.expandDetails}>Expand details</button>;
    }

    const { userRating, isLoading, statistics } = this.props.details;

    if (isLoading) {
      return <div>Loading rating...</div>;
    }

    const { likeCount, dislikeCount } = statistics;

    return (
      <div>
        <button onClick={this.like}>
          {userRating === VIDEO_RATING_TYPES.LIKE ? 'Unlike' : 'Like'}
        </button>
        <span>{likeCount} likes</span>
        <button onClick={this.dislike}>
          {userRating === VIDEO_RATING_TYPES.DISLIKE ? 'Undislike' : 'Dislike'}
        </button>
        <span>{dislikeCount} dislikes</span>
      </div>
    );
  }

  render() {
    const {
      item: {
        thumbnail: { url, height, width },
        title,
        description,
        publishedAt
      }
    } = this.props;
    return (
      <div className="Item-container">
        <div>
          <img src={url} style={{ height, width }} alt="thumbnail" />
        </div>
        <div className="Item-details">
          <div>{title}</div>
          <div>{description}</div>
          <div>Published at {publishedAt}</div>
          {this.renderDetails()}
        </div>
      </div>
    );
  }
}
