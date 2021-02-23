import React, { useState, useEffect } from "react";
import { API_TRIP_URL } from "../../api/api.js";
// import DisplayTrips from "./displayTrips.js";

import axios from "axios";

function NewTrip() {
  const [trip, setTrip] = useState({ parkName: "", stateName: "" });
  const [allTrips, setAllTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleChange = (event) => {
    event.preventDefault();
    let data = event.target.name;
    setTrip((trip) => ({ ...trip, [data]: event.target.value }));
    // console.log(trip);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = API_TRIP_URL + "/new";

    await axios
      .post(url, {
        parkName: trip.parkName,
        stateName: trip.stateName,
      })
      .then((response) => {
        // console.log(response)
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  const showTrips = (event) => {
    axios
      .get("http://localhost:5000/api/trips")
      .then(response => {
        setAllTrips(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        return null;
      });
  };

  const parkVisited = () => {

      document.getElementById('tripName').style = "Color: red";
 
   
   
  }

  const getParkNames = allTrips.map((item, index, array) => {
    return item.parkName;
    // console.log(item.parkName);
  });
  const getStateNames = allTrips.map((item, index, array) => {
    return item.stateName;
    // console.log(item.stateName);
  });

  const buildTripTable = () => {
    const table = document.getElementById("tripTable");
    for (let i = 0; i < allTrips.length; i++) {
      let row = `<th>Park Name</th>  <th>State</th>
                <tr>
                    <td id='tripName'>${getParkNames[i]}
                    </td>
                    <td >${getStateNames[i]}
                    </td>
                <tr>`;

      table.innerHTML += row;
    }

  };

  useEffect(() => {
    showTrips();
    setLoading(false);
  }, []);

  return (
    <div>
      <h2>Trip Planner</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Park Name"
            name="parkName"
            id="newPark"
            value={trip.parkName}
            onChange={handleChange}
          ></input>
          <br />
          <input
            type="text"
            placeholder="State"
            name="stateName"
            id="newState"
            value={trip.stateName}
            onChange={handleChange}
          ></input>
          <button type="submit" className="submit-button">
            Add trip
          </button>
        </form>
      </div>
      <div className="showTrips" id="displayTrips">
        <button onClick={buildTripTable}>View Trips</button>
        <button id='visitedPark' onClick={parkVisited}>Park Visited</button>

      </div>
      <br />
      <div>
        <table>
          <tbody id="tripTable"></tbody>
        </table>
      </div>
    </div>
  );
}

export default NewTrip;
