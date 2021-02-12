import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {NPS_BASE_URL} from '../../api/api';
import {NPS_KEY} from '../../../src/keys.js';


function SearchActivities () {

    const [search, setSearch] = useState();

    //i need filter to search to only show specific info
    const getActivities = () => {
        const npsUrl = `https://developer.nps.gov/api/v1/activities/parks?stateCode=${}&api_key=atJaeoob0GDLz2RZbFc2s6IENE8uJOEpJJ8Kyesz`;

        axios.get(npsUrl).then(response => {
            setSearch(response.data)
            console.log(search);
        }).catch(error=>{
            console.log(error);
        })
        return search
    }

    const handleChange = (event) =>{
        const data = event.target.value;
        setSearch(event.target.value);
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
            <form onSubmit={handleSubmit}>
                <label className='search-label' >Search Activities</label>
                <input className='search-input' id='search' onChange={handleChange}></input>
                
            </form>
        </div>
    )

}



export default SearchActivities;