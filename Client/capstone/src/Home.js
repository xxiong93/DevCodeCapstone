import React from 'react';
import Photos from "./components/photos/photos.js";
import NewTrip from "./components/trips/addTrips.js";
import SearchParks from "./components/search/searchParks.js";
import UserLocation from "./components/location/location.js";

import {Link, BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';

function Home() {
    const history = useHistory();

    return (
    <Router>
    <div>
      <nav>
            {/* <Link to="/">Home</Link> */}
            <button onClick={() => {
                history.push('/')
            }}>Home</button>
            {/* <Link to="/parks">Search for park on a map</Link> */}
            <button onClick={() => {
                history.push('/parks')
            }}>Park Search</button>
            {/* <Link to="/activities">Search for activities in parks</Link> */}
            <button onClick={() => {
                history.push('/activities')
            }}>Activities</button>
      </nav>

    </div>
   </Router>
    )
}

    


export default Home;