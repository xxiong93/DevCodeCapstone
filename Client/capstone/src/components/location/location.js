// import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// import useGeolocation from 'react-hook-geolocation'
// import { Loader } from '@googlemaps/js-api-loader';
// import { GMAPS_KEY } from '../../../src/keys.js';


// const UserLocation = () => {
//   const geolocation = useGeolocation()
//   // const loader = new Loader({
//   //   apiKey: GMAPS_KEY,
//   //   version: 'weekly',
//   // });
//   // loader.load().then(() => {
//   //    const map = new google.maps.Map(document.getElementById("map"), {
//   //       center: { lat: -34.397, lng: 150.644 },
//   //       zoom: 8,
//   //     });
//   // });
//     //need an axios get request to nps api for lat/lon for park
//     //

//     // let map;

//     // function initMap() {
//     //   map = new google.maps.Map(document.getElementById("map"), {
//     //     center: { lat: -34.397, lng: 150.644 },
//     //     zoom: 8,
//     //   });
//     // }

//     // useEffect(()=>{
//     //   initMap();
//     // },[])
//   return !geolocation.error
//     ? (
//       <ul>
//         <li>Latitude:          {geolocation.latitude}</li>
//         <li>Longitude:         {geolocation.longitude}</li>
//       </ul>
//     )
//     : (
//       <p>No geolocation, sorry.</p>
//     )
// }
// export default UserLocation;