import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { API_TRIP_URL } from '../../api/api.js';
import DisplayTrips from './displayTrips.js';

function NewTrip() {

    const [trip, setTrip] = useState({parkName: '', stateName: ''});
    const [allTrips, setAllTrips] = useState();


    const handleChange = (event) => {
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
            // console.log(response);
            // console.log('good');
        }).catch(error => {
            console.log(error);
            // console.log("not good");
        });
    }
    useEffect(() => {
        showTrips();
        // console.log('good here');
    }, [])

    const showTrips = () => {
    //use map() function for saving response data or use an array
    //look at axios and api calls to only disply the data i want to 
    //check 
    axios.get('http://localhost:5000/api/trips')
        .then(response => {
            // let getTrips = [];
            setAllTrips({allTrips: response.data})
            let getTrips = allTrips.map((item, index, array)=>{
                return getTrips.item
            });
            console.log(allTrips);
            console.log(getTrips.item);
            // console.log(response.data);
            // const getTrips = allTrips.map(() => {
            //     return allTrips.parkName;
            //     console.log(allTrips.parkName);
            //     console.log('line 53');
            // })
        })
        .catch(error => {
            console.log(error);
        })

        // return (response.data)
    }
    return(
        <div>
            <div>
            <form onSubmit={handleSubmit}>
                <label className='park'>Park name</label>
                <input type='text' name='parkName' id='newPark' value={trip.parkName} onChange={handleChange}></input>
                <label className='state'>state</label>
                <input type='text' name='stateName' id='newState' value={trip.stateName} onChange={handleChange}></input>
                <button type="submit" className='submit-button' onClick={handleSubmit}>Add</button>
            </form>
            </div>
            <div className='showTrips' id='displayTrips' >
                <DisplayTrips allTrips={allTrips} hello={'hello'}/>
            </div>
        </div>

    )
    // parkName= {allTrips.parkName} stateName={allTrips.stateName}
    }


export default NewTrip;