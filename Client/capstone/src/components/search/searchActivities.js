import React, { useEffect, useState } from "react";
import axios from "axios";
import { NPS_BASE_URL } from "../../api/api";
// import {NPS_KEY} from '../../../src/keys.js';

function SearchActivities() {
  const [search, setSearch] = useState();
  const [parkActivity, setActivity] = useState({ activity: "", states: "" });
  const [stateName, setStateName] = useState();
  const [loading, setLoading] = useState(true);

  //i need filter to search to only show specific info
  //i need a function that will allow user to specify state
  //i need a fucntion that wil specify number of options shown
  const getActivities = () => {
    const api = `https://developer.nps.gov/api/v1/activities/parks?`;
    const parkQ = `q=` + parkActivity.activity;
    const parkS = `stateCode=` + parkActivity.states;
    const apiKey = "&API_KEY=atJaeoob0GDLz2RZbFc2s6IENE8uJOEpJJ8Kyesz";
    //function that will filter for state withing the array, response.data.data[0].parks[need this value]

    const url = api + parkQ + apiKey;
    console.log(url);
    console.log(parkQ);
    console.log(parkS);

    axios
      .get(url)
      .then((response) => {
        setSearch(response.data);
        console.log("this line");
        console.log(search.data[0].parks[0].states);
        // console.log(response.data.data[0].parks[7].fullName);
      })
      .catch((error) => {
        console.log(error);
      });
    return search;
  };

  
  //i need a variable that will hold this search data
  //i need this variable to specify the activity from a state
  const handleChange = (event) => {
    // const data = event.target.value;
    // setActivity(event.target.value);
    // console.log(data);

    let data = event.target.name;
    setActivity((search) => ({
      ...search,
      [event.target.name]: event.target.value,
    }));
    console.log(search);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getActivities();
  };


  
  useEffect(() => {
    setLoading(false);
  });

  return (
    <div>
      <div>
        {loading ? (
          <div>loading...</div>
        ) : (
          <div>
            <form onSubmit={handleSubmit} id="search-activities">
              <div>
                <label className="search-label" for="search"></label>
                <input
                  className="search-input"
                  id="search"
                  name="activity"
                  placeholder="Search Activities"
                  onChange={handleChange}
                ></input>

                <label className="state-label" for="search"></label>
                <input
                  type="text"
                  className="state-input"
                  id="state"
                  name="states"
                  placeholder="Choose state"
                  onChange={handleChange}
                ></input>
              </div>
            </form>
            <select name="state-ops" id="state-ops" form="search-activities">
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
              <option value="PR">Puerto Rico</option>
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
            </select>
            <div>
              <button onClick={handleSubmit}>Submit</button>
            </div>
            <div>
              <table id="activity-states">
                <tbody>
                  <tr>
                    {/* <td type='text' value={search.data[0].parks[0].states}>{search.data[0].parks[0].states}</td> */}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchActivities;
