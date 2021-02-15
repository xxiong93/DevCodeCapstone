import React, {useState, useEffect} from 'react';
import useGeolocation from 'react-hook-geolocation'


const ComponentWithGeolocation = () => {
  const geolocation = useGeolocation()
 
    //need an axios get request to nps api for lat/lon for park
    //


  return !geolocation.error
    ? (
      <ul>
        <li>Latitude:          {geolocation.latitude}</li>
        <li>Longitude:         {geolocation.longitude}</li>
        {/* <li>Location accuracy: {geolocation.accuracy}</li>
        <li>Altitude:          {geolocation.altitude}</li>
        <li>Altitude accuracy: {geolocation.altitudeAccuracy}</li>
        <li>Heading:           {geolocation.heading}</li>
        <li>Speed:             {geolocation.speed}</li>
        <li>Timestamp:         {geolocation.timestamp}</li> */}
      </ul>
    )
    : (
      <p>No geolocation, sorry.</p>
    )
}
export default ComponentWithGeolocation;