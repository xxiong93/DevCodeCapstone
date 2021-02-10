import React from 'react';
import Login from './components/login/login.js';
import Photos from './components/photos/photos.jsx';
import NewTrip from './components/trips/addTrips.js';

function App() {
  

    return(
        <div>
            <Login/>
            <Photos/>
            <NewTrip/>
        </div>
        
    );
}

export default App;
