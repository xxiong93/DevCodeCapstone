import React, { useState, useEffect } from "react";
import { API_TRIP_URL } from "../../api/api.js";
import DisplayTrips from "./displayTrips.js";
import axios from "axios";

function NewTrip() {
  const [trip, setTrip] = useState({ parkName: "", stateName: "" });
  const [allTrips, setAllTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewingTable, setViewingTable] = useState();

  const handleChange = (event) => {
    event.preventDefault();
    let data = event.target.name;
    setTrip((trip) => ({ ...trip, [data]: event.target.value }));
    // console.log(trip);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const url = API_TRIP_URL + "/new";

    axios
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
      .then((response) => {
        setAllTrips(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        return null;
      });
  };

  //   const deleteTrip = () => {
  //       axios.delete("http://localhost:5000/api/trips")
  //       .then((response) => {

  //       })
  //   }

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
      let row = `<tr>
                            <td>${getParkNames[i]} ${getStateNames[i]}
                            <button>delete</button>

                            </td>
                <tr>`;

      table.innerHTML += row;
    }
  };

  useEffect(() => {
    showTrips();
    setLoading(false);
    // buildTripTable();
  }, []);
  return (
    <div>
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
