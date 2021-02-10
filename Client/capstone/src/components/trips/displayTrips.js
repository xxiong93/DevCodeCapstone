import axios from 'axios';
import React, { useState } from 'react';

export default function DisplayTrips(props) {
    const getParkNames = props.allTrips.map((item, index, array) => {
        return item.parkName;
    })
    const getStateNames = props.allTrips.map((item, index, array) => {
        return item.stateName;
    })

    const buildTable = (props) => {
        const table = document.getElementById('tripTable')

        for(let i=0; i<getParkNames.length; i++){
            let row = `<tr>
                            <td>${props.getParkNames[i]}</td>
                       <tr>`

            table.innerHTML += row
        }
    }
//i need this function to show the trips generated from the get request in addtrips
//i need to show at least one trip to start
    return(
        <div>
            {/* <p>{JSON.stringify(props.allTrips[0].parkName)}</p> */}
            <div>{getParkNames} {getStateNames}</div>
            <div>
                <table>
                    <tbody id="tripTable">

                    </tbody>
                </table>
            </div>

            <p>YOU ARE HERE</p>
        </div>
    )

}