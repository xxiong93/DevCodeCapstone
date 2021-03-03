import React from 'react';

import {Link, BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';

function Home() {
    const history = useHistory();

    return (
    <Router>
    <div>
      <nav id='navigation-bar'>
            <Link to="/">Home</Link>
            {/* <button onClick={() => {
                history.push('/')
            }}>Home</button> */}
            <Link to="/parks">Activities planner</Link>
            {/* <button onClick={() => {
                history.push('/parks')
            }}>Park Search</button> */}
            <Link to="/activities">Search for parks on a map</Link>
            {/* <button onClick={() => {
                history.push('/activities')
            }}>Activities</button> */}
            <Link to="/location">Find my location</Link>

      </nav>

    </div>
   </Router>
    )
}

    


export default Home;