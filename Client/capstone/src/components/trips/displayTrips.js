import axios from 'axios';
import React, { useState } from 'react';

export default function DisplayTrips(props) {

//i need this function to show the trips generated from the get request in addtrips
//i need to show at least one trip to start
    return(
        <div>
            <p>{JSON.stringify(props.allTrips)}</p>
            <p>{props.hello}</p>
            <p>YOU ARE HERE</p>
        </div>
    )

}