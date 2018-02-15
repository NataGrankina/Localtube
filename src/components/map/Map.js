import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMap from 'google-map-react';
import { GOOGLE_API_KEY } from 'config';
import LocationMarker from './locationMarker';
import './Map.css';

const googleMapOptions = () => ({
  fullscreenControl: false
});

export default class Map extends Component {
  static props = {
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    radius: PropTypes.number.isRequired,
    selectLocation: PropTypes.func.isRequired
  };

  state = {
    center: {
      lat: 52.52,
      lng: 13.34
    },
    isGettingCurrentLocation: !!navigator.geolocation
  };

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.setCurrentLocation,
        this.onGettingCurrentLocationDenied
      );
    }
  }

  onGettingCurrentLocationDenied = () => {
    this.setState({
      isGettingCurrentLocation: false
    });
  };

  onMapClick = ({ lat, lng }) => {
    this.props.selectLocation(lat, lng);
  };

  setCurrentLocation = (position) => {
    const { coords: { latitude: lat, longitude: lng } } = position;
    this.setState({
      center: { lat, lng },
      isGettingCurrentLocation: false
    });
    this.props.selectLocation(lat, lng);
  };

  render() {
    const { lat, lng, radius } = this.props;
    const { center, isGettingCurrentLocation } = this.state;

    const description = isGettingCurrentLocation
      ? 'Retrieving current position...'
      : `Click on any location at the map to search for the latest Youtube videos in radius ${radius}km`;

    return (
      <div className="Map-container">
        <h3>{description}</h3>
        <div className="Map-googleMap">
          <GoogleMap
            bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
            center={center}
            defaultZoom={11}
            options={googleMapOptions}
            onClick={this.onMapClick}
          >
            <LocationMarker lat={lat} lng={lng} />
          </GoogleMap>
        </div>
      </div>
    );
  }
}
