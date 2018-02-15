import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { VIDEO_RATING_TYPES } from 'utils';
import Button from 'components/base/button';
import './RatingDetails.css';

export default class RatingDetails extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    userRating: PropTypes.string.isRequired,
    statistics: PropTypes.object.isRequired,
    rateVideo: PropTypes.func.isRequired,
    className: PropTypes.string
  };

  rate(rating) {
    const calculatedRating =
      rating === this.props.userRating ? VIDEO_RATING_TYPES.NONE : rating;
    this.props.rateVideo(this.props.id, calculatedRating);
  }

  like = () => {
    this.rate(VIDEO_RATING_TYPES.LIKE);
  };

  dislike = () => {
    this.rate(VIDEO_RATING_TYPES.DISLIKE);
  };

  render() {
    const {
      userRating,
      statistics: { likeCount, dislikeCount },
      className
    } = this.props;

    const isLiked = userRating === VIDEO_RATING_TYPES.LIKE;
    const isDisliked = userRating === VIDEO_RATING_TYPES.DISLIKE;

    return (
      <div className={className}>
        <div className="RatingDetails-group">
          <Button
            className="RatingDetails-button"
            onClick={this.like}
            isToggled={isLiked}
          >
            <span role="img" aria-label="like">
              👍
            </span>
          </Button>
          <span className="RatingDetails-counter">{likeCount}</span>
        </div>
        <div className="RatingDetails-group">
          <Button
            className="RatingDetails-button"
            onClick={this.dislike}
            isToggled={isDisliked}
          >
            <span role="img" aria-label="dislike">
              👎
            </span>
          </Button>
          <span className="RatingDetails-counter">{dislikeCount}</span>
        </div>
      </div>
    );
  }
}
