import React, {useState} from 'react';
import axios from 'axios';
// import {NPS_BASE_URL} from '../../api/api';
// import {NPS_KEY} from '../../../src/keys.js';


function SearchActivities () {

    const [search, setSearch] = useState();
    const [activity, setActivity] = useState();
    const [stateName, setStateName] = useState();

    
    //i need filter to search to only show specific info
    //i need a function that will allow user to specify state 
    //i need a fucntion that wil specify number of options shown
    const getActivities = () => {
        
        
        const api = `https://developer.nps.gov/api/v1/activities/parks?q=`;
        const parkQ = activity;
        const apiKey = '&API_KEY=atJaeoob0GDLz2RZbFc2s6IENE8uJOEpJJ8Kyesz';
        //function that will filter for state withing the array, response.data.data[0].parks[need this value]

        const url = api + parkQ + apiKey;
        console.log(url);
        console.log(parkQ);
        axios.get(url).then(response => {
            setSearch(response.data);
            
            console.log(search);
            console.log(response.data.data[0].parks[5].fullName);
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

    return (
        <div>
            <form onSubmit={handleSubmit} id='search-activities'>
                <span>
                <label className='search-label' />
                <input  className='search-input' id='search' placeholder='Search Activities' onChange={handleChange}></input>

                <label className='state-label' />
                <input  className='state-input' id='state' placeholder='Choose state'></input>
                </span>
                
            </form>
            <select name='state-ops' id='state-ops' form='search-activities' >
                <option value='AL'>Alabama</option>
                <option value='AK'>Alaska</option>
                <option value='AZ'>Arizona</option>
                <option value='AR'>Arkansas</option>
                <option value='CA'>California</option>
                <option value='CO'>Colorado</option>
                <option value='CT'>Connecticut</option>
                <option value='DE'>Delaware</option>
                <option value='FL'>Florida</option>
                <option value='GA'>Georgia</option>
                <option value='HI'>Hawaii</option>
                <option value='ID'>Idaho</option>
                <option value='IL'>Illinois</option>
                <option value='IN'>Indiana</option>
                <option value='IA'>Iowa</option>
                <option value='KS'>Kansas</option>
                <option value='KY'>Kentucky</option>
                <option value='LA'>Louisiana</option>
                <option value='ME'>Maine</option>
                <option value='MD'>Maryland</option>
                <option value='MA'>Massachusetts</option>
                <option value='MI'>Michigan</option>
                <option value='MN'>Minnesota</option>
                <option value='MS'>Mississippi</option>
                <option value='MO'>Missouri</option>
                <option value='MT'>Montana</option>
                <option value='NE'>Nebraska</option>
                <option value='NV'>Nevada</option>
                <option value='NH'>New Hampshire</option>
                <option value='NJ'>New Jersey</option>
                <option value='NM'>New Mexico</option>
                <option value='NY'>New York</option>
                <option value='NC'>North Carolina</option>
                <option value='ND'>North Dakota</option>
                <option value='OH'>Ohio</option>
                <option value='OK'>Oklahoma</option>
                <option value='OR'>Oregon</option>
                <option value='PA'>Pennsylvania</option>
                <option value='PR'>Puerto Rico</option>
                <option value='RI'>Rhode Island</option>
                <option value='SC'>South Carolina</option>
                <option value='SD'>South Dakota</option>
                <option value='TN'>Tennessee</option>
                <option value='TX'>Texas</option>
                <option value='UT'>Utah</option>
                <option value='VT'>Vermont</option>
                <option value='VA'>Virginia</option>
                <option value='WA'>Washington</option>
                <option value='WV'>West Virginia</option>
                <option value='WI'>Wisconsin</option>
                <option value='WY'>Wyoming</option>
            </select>

        </div>
    )

}



export default SearchActivities;