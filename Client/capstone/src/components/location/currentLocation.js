import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { GOOGLE_MAPS_KEY } from "../../keys.js";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      latitude: null,
      longitude: null,
    };
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates);
    } else {
      alert = "Geolocation is not supported by this browser.";
    }
  }

  getCoordinates(position) {
    console.log(position);
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  }

  //need an event listener for click that will create marker
  //this should also update map position
  render() {
    return (
      <div>
        <h1>{this.state.selectedPlace.name}</h1>
        <button onClick={this.getLocation}>Get Current Location</button>

        <Map google={this.props.google} zoom={12} center={{lat: this.state.latitude, lng: this.state.longitude}}>
          <Marker name={"Current location"} position={{
              lat: this.state.latitude,
              lng: this.state.longitude}}/>
          <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAPS_KEY,
})(MapContainer);
