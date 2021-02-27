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

  render() {
    return (
      <div>
        <h1>{this.state.selectedPlace.name}</h1>
        <button onClick={this.getLocation}>Get Current Location</button>

        <Map google={this.props.google} zoom={8}>
          <Marker name={"Current location"} position={{
              latitude: this.state.latitude,
              longitude: this.state.longitude}}/>
          <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAPS_KEY,
})(MapContainer);
// const CurrentLocation = () => {
//   const [coordinates, setCoordinates] = useState({
//     latitude: "",
//     longitude: "",
//   });
//   const createMap = () => {
//     map = new google.maps.Map(document.getElementById("map"), {
//       center: {
//         latitude: coordinates.latitude,
//         longitude: coordinates.longitude,
//       },
//       zoom: 8
//     });
//   };
//   const getLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(getCoordinates);
//     } else {
//       alert = "Geolocation is not supported by this browser.";
//     }
//   };
//   const getCoordinates = (position) => {
//     // console.log(position);
//     setCoordinates({
//       latitude: position.coords.latitude,
//       longitude: position.coords.longitude,
//     });
//     // console.log(coordinates);
//   };

//   return (
//     <div>
//       <h1>Current Location</h1>
//       {/* <script>
//               console.log(position);
//           </script> */}
//         <div id='map'>

//         </div>
//     </div>
//   );
// };
// export default CurrentLocation;
