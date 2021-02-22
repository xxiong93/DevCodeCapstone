import React from "react";
import Login from "./components/login/login.js";
import Photos from "./components/photos/photos.js";
import NewTrip from "./components/trips/addTrips.js";
import SearchParks from "./components/search/searchParks.js";
import UserLocation from "./components/location/location.js";
import Register from "./components/register/register.js";
import Landing from "./components/landing/landing.js";
import Home from "./Home";
// import { NavigationBar } from "./components/navBar/navBar.js";
import {
  Route,
  BrowserRouter as Router,
  IndexRoute,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Login />
      <br />
      <Register /> 
       <Photos />
      <NewTrip />
      <SearchParks />
      <UserLocation />
      <Home/>
      {/* <Router>
        <Home />

        <Route path="/landing" component={Landing}>
          <Route path="/parks" component={SearchParks} />
          <Route path="/parks" component={Photos} />
          <Route path="/parks" component={NewTrip} />

          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/activities" component={UserLocation} />
            <Route path="/logout" component={Landing} />
          </Switch>
        </Route>
      </Router> */}
    </div>
  );
}

export default App;
