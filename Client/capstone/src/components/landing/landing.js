import React, { useState }from 'react';
import Login from "../login/login";
import Register from "../register/register";

function Landing () {
    const [currentUser, setCurrentUser] = useState();

    return (
                
        <div className = "Landing">
            <Login currentUser = {currentUser} setCurrentUser = {setCurrentUser}/>
            <Register currentUser = {currentUser} setCurrentUser = {setCurrentUser}/>
        </div>
    )
}


export default Landing;