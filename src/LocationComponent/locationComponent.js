import React from "react";
import { geolocated } from "react-geolocated";

class LocationComponent extends React.Component {
    render() {
        return !this.props.isGeolocationAvailable ? (
          <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
          <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (
          <div>
            <h3>Latitude: {this.props.coords.latitude}</h3>
            <h3>Longitude: {this.props.coords.longitude}</h3>
          </div>
        ) : (
          <div>Getting the location data&hellip; </div>
        );
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(LocationComponent);