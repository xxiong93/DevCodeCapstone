import React, { useState, useEffect } from 'react';
import { API_TRIP_URL } from '../../api/api.js';
import DisplayTrips from './displayTrips.js';
import axios from 'axios';


function NewTrip() {

    const [trip, setTrip] = useState({parkName: '', stateName: ''});
    const [allTrips, setAllTrips] = useState();
    const [loading, setLoading] = useState(true);


    const handleChange = (event) => {
        event.preventDefault();
        let data = event.target.name;
        setTrip(trip =>({...trip,
            [event.target.name]: event.target.value}))
        console.log(trip);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const url = API_TRIP_URL+"/new";
        
        axios.post(url, {
            parkName: trip.parkName,
            stateName: trip.stateName
        }).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error);
        });
    }


    const showTrips = (event) => {
    //use map() function for saving response data or use an array
    //look at axios and api calls to only disply the data i want to 
    //check 
    axios.get('http://localhost:5000/api/trips')
        .then(response => {
            setAllTrips(response.data)

            console.log(allTrips[4].parkName);
            const getParks = allTrips.map((item, index, array) => {
                return item.parkName;
            })
            const getStates = allTrips.map((item, index, array) => {
                return item.stateName;
            })
            console.log(getParks[1] + ' ' + getStates[1]);
            console.log('line 53');
            return (getParks, getStates)
        })
        .catch(error => {
            console.log(error);
        })

        // return (response.data)
    }

    // const getParkNames = allTrips.map((item, index, array) => {
    //     return item.parkName;
    //     console.log(item.parkName);
    // })
    // const getStateNames = allTrips.map((item, index, array) => {
    //     return item.stateName;
    //     console.log(item.stateName);
    // })

    // const buildTable = () => {
    //     const table = document.getElementById('tripTable')

    //     for(let i=0; i<getParkNames.length; i++){
    //         let row = `<tr>
    //                         <td>${getParkNames[i]} ${getStateNames[i]}</td>
    //                    <tr>
    //                    `

    //         table.innerHTML += row
    //     }
    // }
   
    useEffect(()=>{
        showTrips();
        setLoading(false);
        // buildTable();
    }, [])
    return(
        <div>
            <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Park Name' name='parkName' id='newPark' value={trip.parkName} onChange={handleChange}></input>
                <br/>
                <input type='text' placeholder='State' name='stateName' id='newState' value={trip.stateName} onChange={handleChange}></input>
                <button type="submit" className='submit-button' onClick={handleSubmit}>Add</button>
            </form>
            </div>
            <div className='showTrips' id='displayTrips' >
                {console.log(allTrips)}
               {loading ? <div>loading...</div> : <DisplayTrips allTrips={allTrips} viewTrips={'Trips added to list'}/>}
            </div>
            <br/>
            <div>
                <table>
                    <tbody id="tripTable">
                    </tbody>
                </table>
            </div>
        </div>

    )
    }


export default NewTrip;