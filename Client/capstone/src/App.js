import React from "react";
import Login from "./components/login/login.js";
import Photos from "./components/photos/photos.js";
import NewTrip from "./components/trips/addTrips.js";
import SearchParks from "./components/search/searchParks.js";
import UserLocation from "./components/location/location.js";
import Register from "./components/register/register.js";
import Landing from "./components/landing/landing.js";
import CurrentLocation from "./components/location/currentLocation.js";
import Home from "./Home";
import Planner from "./components/planner/planner.js";

import {
  Route,
  BrowserRouter as Router,
  IndexRoute,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <div>
      <h1>National Park Planner</h1>
      {/* <Login />
      <br />
      <Register />
      <Photos />
      <SearchParks />
      <NewTrip />
      <CurrentLocation />

      <UserLocation />
      <Home /> */}
      <Router>
        <Home />
        <Switch>
          <Route path="/parks" component={Planner} />
          <Route path="/location" component={CurrentLocation} />
          <Route path="/" exact component={Landing} />
          <Route path="/activities" component={UserLocation} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
