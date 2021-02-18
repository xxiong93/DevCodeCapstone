import React from 'react';
import Login from './components/login/login.js';
import Photos from './components/photos/photos.js';
import NewTrip from './components/trips/addTrips.js';
import SearchActivities from './components/search/searchActivities.js';
import UserLocation from './components/location/location.js';
import Register from './components/register/register.js';
import Landing from './components/landing/landing.js';
import {Route, BrowserRouter as Router, IndexRoute} from 'react-router-dom';

function App() {
  

    return(
        <div>
            {/* <Login/> */}
            <br/>
            {/* <Register/> */}
            {/* <Photos/>
            <NewTrip/>
            <SearchActivities/>
            <UserLocation/> */}
            <Router>
                <Route path={'/landing'} component={Landing}>
                    <Route path={'/login'} component={Login}/>
                    <Route path={'/register'} component={Register}/>
                </Route>    

            </Router>
            

        </div>
        
    );
}

export default App;
