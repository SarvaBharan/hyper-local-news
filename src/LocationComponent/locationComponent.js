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
            <div>latitude</div>
            <div>{this.props.coords.latitude}</div>
            <div>longitude</div>
            <div>{this.props.coords.longitude}</div>
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