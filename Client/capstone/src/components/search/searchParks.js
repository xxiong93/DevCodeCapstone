import React, { useEffect, useState } from "react";
import axios from "axios";
import { NPS_BASE_URL } from "../../api/api";
// import {NPS_KEY} from '../../../src/keys.js';

function SearchParks({match}) {
  const [search, setSearch] = useState([]);
  const [parkActivity, setActivity] = useState({ query: '' });
  const [stateName, setStateName] = useState('');
  const [loading, setLoading] = useState(true);


  let handleChange = (event) => {

    setActivity({ query: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    getParkData();    
    parksTable();
  }

  const getParkData = async () => {
     const params = {
      apiKey: "atJaeoob0GDLz2RZbFc2s6IENE8uJOEpJJ8Kyesz",
      query: parkActivity.query,
      stateCode: "",
      limit: 5,
      start: 0,
    };

    const url = `https://developer.nps.gov/api/v1/parks?API_KEY=${params.apiKey}&stateCode=MN&q=${params.query}&limit=${params.limit}`;
     await axios.get(url)
      .then(parkData => {
        // console.log(parkData)
        setSearch(parkData.data.data);
        console.log(parkData.data.data);
        console.log(search[0].entranceFees[0].cost);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  

  const parksTable = () => {
    const table = document.getElementById("park-states");
    
    for (let i = 0; i < search.length; i++) {
      let row = `<th>Park Name</th><th>State</th><th>Admission Fee</th><th>Open Hours Sun-Sat</th>

                <tr>
                    
                    <td>${search[i].fullName}        
                    </td>
                    <td>${search[i].states}
                    </td>
                    <td>$${search[i].entranceFees[0].cost}
                    </td>
                    <td>${search[i].operatingHours[0].standardHours.sunday}
                    </td>
                    

                </tr>`;

      table.innerHTML += row;
    }
  };

  useEffect(() => {
    setLoading(false);
    getParkData();
    // parksTable();
  },[])


  return (
    <div>
      <div>
        <h2>Search for Activities</h2>
        {loading ? (
          <div>loading...</div>
        ) : (
          <div>
            <form onSubmit={handleSubmit} id="search-activities">
              <div>
                <label className="activities-search-label" for="search">
                  <input
                    type="text"
                    className="search-input"
                    id="activities"
                    name="activity"
                    placeholder="Find an activity"
                    value={parkActivity.query}
                    onChange={handleChange}
                  ></input>
                </label>
                {/* <label className="state-search-label" for="search">
                  <input
                    type="text"
                    className="state-input"
                    id="states"
                    name="state"
                    placeholder="Choose a state"
                    onChange={handleChange}
                  ></input>
                </label> */}
                <input type='submit' value='Search' ></input>
              </div>
              <div>
              <table id="park-states" >
                <tbody>
                  <tr>
                    {/* <td>{JSON.stringify(search.data[]0)}</td> */}
                  </tr>
                </tbody>
              </table>
            </div>
            </form>
            <div id="search-display">
              <p className="search-results" value={search}></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

              }
export default SearchParks;



            {/* <select name="state-ops" id="state-ops" form="search-activities">
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select> */}
