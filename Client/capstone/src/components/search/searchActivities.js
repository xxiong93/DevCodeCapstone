import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {NPS_BASE_URL} from '../../../api/api';


function SearchActivities () {

    const [search, setSearch] = useState();


    const getActivities = (event) => {
        const npsUrl = NPS_BASE_URL+'thingstodo';

        axios.get(npsUrl).then(response => {
            setSearch(response.data)
            console.log(search);
        }).catch(error=>{
            console.log(error);
        })
    }

    const handleChange = (event) =>{
        const value = event.target.value;
        setSearch(event.target.value);
        if(value == null){
            return (error)
        }

    }
    

    return (
        <div>
            <form>
                <label>
                    <input className='search-activities' id='search' onChange={handleChange}>

                    </input>
                </label>
            </form>
        </div>
    )

}



export default SearchActivity;