import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {NPS_BASE_URL} from '../../api/api';
import {NPS_KEY} from '../../../src/keys.js';


function SearchActivities () {

    const [search, setSearch] = useState();
    const [activity, setActivity] = useState();
    const [stateName, setStateName] = useState();

    
    //i need filter to search to only show specific info
    //i need a function that will allow user to specify state 
    //i need a fucntion that wil specify number of options shown
    const getActivities = (event) => {
        
        
        const api = `https://developer.nps.gov/api/v1/activities/parks?q=`;
        const parkQ = activity;
        const apiKey = '&API_KEY=atJaeoob0GDLz2RZbFc2s6IENE8uJOEpJJ8Kyesz';
        // const stateQ = 
        //function that will filter for state withing the array, response.data.data[0].parks[need this value]

        const url = api + parkQ + apiKey;
        console.log(url);
        console.log(parkQ);
        axios.get(url).then(response => {
            setSearch(response.data);
            
            console.log(search);
            console.log(response.data.data[0].parks[1].fullName);
            console.log('you are here')
        }).catch(error=>{
            console.log(error);
        })
        return search
    }
    //i need a variable that will hold this search data
    //i need this variable to specify the activity from a state
    const handleChange = (event) =>{
        const data = event.target.value;
        setActivity(event.target.value);
        console.log(data);
     

    }
    
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        getActivities();


    }
    // useEffect(() => {
    //     getActivities();
    // }, [])

    return (
        <div>
            <form onSubmit={handleSubmit} id='search-activities'>
                <span>
                <label className='search-label' >Search Activities</label>
                <input type='text' className='search-input' id='search'  onChange={handleChange}></input>
                <label className='state-lable'>Choose state</label>
                <input className='state-input' id='state' onChange={handleChange} placeholder='choose state'></input>
                </span>
            </form>
            <select name='state-ops' id='state-ops' form='search-activities'>
                    <option value=''>Alabama</option>
                    <option value=''>Alaska</option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>

                </select>

        </div>
    )

}



export default SearchActivities;