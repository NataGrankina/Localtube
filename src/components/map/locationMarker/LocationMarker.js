import React from 'react';
import './LocationMarker.css';

export default function LocationMarker() {
  const markerWidth = 14;
  const markerStyle = {
    left: -markerWidth / 2,
    top: -markerWidth / 2,
    width: markerWidth,
    height: markerWidth
  };

  return <div className="LocationMarker" style={markerStyle} />;
}
