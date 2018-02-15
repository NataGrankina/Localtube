import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getViewVideoLink } from 'utils';
import Button from 'components/base/button';
import RatingDetails from './ratingDetails';
import './VideoItem.css';

export default class VideoItem extends Component {
  static props = {
    item: PropTypes.object, // TODO: improve types here,
    isExpanded: PropTypes.bool.isRequired,
    details: PropTypes.object,
    expandVideoDetails: PropTypes.func.isRequired,
    rateVideo: PropTypes.func.isRequired
  };

  expandDetails = () => {
    this.props.expandVideoDetails(this.props.item.id);
  };

  renderDetails() {
    if (!this.props.isExpanded) {
      return (
        <Button className="Item-details-expand" onClick={this.expandDetails}>
          Expand details
        </Button>
      );
    }

    const { item: { id }, details, rateVideo } = this.props;
    const {
      userRating, isLoading, statistics, error
    } = details;

    if (isLoading) {
      return <div className="Item-ratingDetails">Loading rating...</div>;
    }

    if (error) {
      return <div className="Item-ratingDetails">Error happened</div>;
    }

    return (
      <RatingDetails
        id={id}
        className="Item-ratingDetails"
        statistics={statistics}
        userRating={userRating}
        rateVideo={rateVideo}
      />
    );
  }

  render() {
    const {
      item: {
        id, thumbnail: { url }, title, description, publishedAt
      }
    } = this.props;
    return (
      <div className="Item-container">
        <div>
          <img src={url} height="110" alt={title} />
        </div>
        <div className="Item-details">
          <a
            className="Item-details-title"
            href={getViewVideoLink(id)}
            target="_blank"
          >
            {title}
          </a>
          <div className="Item-details-description">{description}</div>
          <div className="Item-details-published">
            Published at {publishedAt.toLocaleString()}
          </div>
          {this.renderDetails()}
        </div>
      </div>
    );
  }
}
