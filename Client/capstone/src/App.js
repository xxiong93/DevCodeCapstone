import React from 'react';
import Login from './components/login/login.js';
import Photos from './components/photos/photos.jsx';
import NewTrip from './components/trips/addTrips.js';
import SearchActivities from './components/search/searchActivities.js';
import Location from './components/location/location.js';

function App() {
  

    return(
        <div>
            <Login/>
            <Photos/>
            <NewTrip/>
            <SearchActivities/>
            <Location/>
        </div>
        
    );
}

export default App;
