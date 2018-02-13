import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './VideoItem.css';

export default class VideoItem extends Component {
  static props = {
    item: PropTypes.object // TODO: improve types here
  };

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
        </div>
      </div>
    );
  }
}
