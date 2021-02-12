import React, {useState, useEffect} from 'react';
import useGeolocation from 'react-hook-geolocation'


// let map, infoWindow;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 6,
//   });
//   infoWindow = new google.maps.InfoWindow();
//   const locationButton = document.createElement("button");
//   locationButton.textContent = "Pan to Current Location";
//   locationButton.classList.add("custom-map-control-button");
//   map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
//   locationButton.addEventListener("click", () => {
//     // Try HTML5 geolocation.
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const pos = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };
//           infoWindow.setPosition(pos);
//           infoWindow.setContent("Location found.");
//           infoWindow.open(map);
//           map.setCenter(pos);
//         },
//         () => {
//           handleLocationError(true, infoWindow, map.getCenter());
//         }
//       );
//     } else {
//       // Browser doesn't support Geolocation
//       handleLocationError(false, infoWindow, map.getCenter());
//     }
//   });
// }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//   infoWindow.setPosition(pos);
//   infoWindow.setContent(
//     browserHasGeolocation
//       ? "Error: The Geolocation service failed."
//       : "Error: Your browser doesn't support geolocation."
//   );
//   infoWindow.open(map);
// }


// export default initMap;

// function userLocation() {


//     const getLocation = () => {
//         if('geolocation' in navigator) {
//             console.log('geolocation available')
//             navigator.geolocation.getCurrentPosition((position) => {
//             console.log(position.coords);
//             console.log(position.coords);
//             });
//         } else {
//             console.log('geolocation not available')
//             }
//     }


//     useEffect(()=>{
//         getLocation();    
//     },[])


//     return(
//         <div>
//             <script>if('geolocation' in navigator) {
//         console.log('geolocation available')
//         navigator.geolocation.getCurrentPosition((position) => {
//         console.log(position.coords);
//         console.log(position.coords);
//         });
//         } else {
//         console.log('geolocation not available')
//         }</script>
//         </div>
//     )

// }



 
const ComponentWithGeolocation = () => {
  const geolocation = useGeolocation()
 
  return !geolocation.error
    ? (
      <ul>
        <li>Latitude:          {geolocation.latitude}</li>
        <li>Longitude:         {geolocation.longitude}</li>
        <li>Location accuracy: {geolocation.accuracy}</li>
        <li>Altitude:          {geolocation.altitude}</li>
        <li>Altitude accuracy: {geolocation.altitudeAccuracy}</li>
        <li>Heading:           {geolocation.heading}</li>
        <li>Speed:             {geolocation.speed}</li>
        <li>Timestamp:         {geolocation.timestamp}</li>
      </ul>
    )
    : (
      <p>No geolocation, sorry.</p>
    )
}
export default ComponentWithGeolocation;