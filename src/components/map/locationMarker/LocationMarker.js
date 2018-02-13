import React, { Component } from 'react';
import youtubeLogo from 'icons/youtube.svg';

export default class LocationMarker extends Component {
  render() {
    const markerWidth = 20;
    const markerStyle = {
      left: -markerWidth / 2,
      top: -markerWidth / 2,
      width: markerWidth,
      height: markerWidth
    };

    return (
      <div className="LocationMarker">
        <img src={youtubeLogo} style={markerStyle} alt="marker" />
      </div>
    );
  }
}
