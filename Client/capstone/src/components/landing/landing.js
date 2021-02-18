import React, { useState }from 'react';
import Login from "./Login/Login";
import Register from "./Register/Register";
import logo from "../../img/logo.png";
import '../Landing/landing.css';
import NewsFeed from '../Newsfeed/Newsfeed';

function Landing () {
    const [currentUser, setCurrentUser] = useState();

    return (
                
        <div className = "Landing">
            <img className="logo" src={logo} alt="logo" width="100" height="100"></img>
            <Login currentUser = {currentUser} setCurrentUser = {setCurrentUser}/>
            <Register currentUser = {currentUser} setCurrentUser = {setCurrentUser}/>
            {/* <NewsFeed currentUser = {currentUser} setCurrentUser = {setCurrentUser}/> */}
        </div>
    )
}


export default Landing;