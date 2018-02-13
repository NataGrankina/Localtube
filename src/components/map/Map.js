import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMap from 'google-map-react';
import LocationMarker from './locationMarker';

export default class Map extends Component {
  static props = {
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    selectLocation: PropTypes.func.isRequired
  };

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { coords: { latitude: lat, longitude: lng } } = position;
        this.props.selectLocation(lat, lng);
      });
    }
  }

  onMapClick = ({ lat, lng }) => {
    this.props.selectLocation(lat, lng);
  };

  render() {
    const { lat, lng } = this.props;
    return (
      <GoogleMap
        center={{ lat, lng }}
        defaultZoom={11}
        onClick={this.onMapClick}
      >
        <LocationMarker lat={lat} lng={lng} />
      </GoogleMap>
    );
  }
}
