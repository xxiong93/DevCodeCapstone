import React from 'react';
import Photos from "../photos/photos.js";
import NewTrip from "../trips/addTrips.js";
import SearchParks from "../search/searchParks.js";


function Planner() {

    return(
        <div>
            <h2>Upload Photos</h2>
            <Photos/>
            <NewTrip/>
            <SearchParks/>     
        </div>
    )
}


export default Planner;