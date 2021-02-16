import React from 'react';
import Login from './components/login/login.js';
import Photos from './components/photos/photos.jsx';
import NewTrip from './components/trips/addTrips.js';
import SearchActivities from './components/search/searchActivities.js';
// import UserLocation from './components/location/location.js';
import Register from './components/register/register.js';

function App() {
  

    return(
        <div>
            <Login/>
            <br/>
            <Register/>
            <Photos/>
            <NewTrip/>
            <SearchActivities/>
            {/* <UserLocation/> */}
        </div>
        
    );
}

export default App;
