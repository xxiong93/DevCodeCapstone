// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function DisplayTrips(props) {

   
//     const getParkNames = props.allTrips.map((item, index, array) => {
//         return item.parkName;
//         console.log(item.parkName);
//     })
//     const getStateNames = props.allTrips.map((item, index, array) => {
//         return item.stateName;
//         console.log(item.stateName);
//     })
   
//     const numItems = (event) => {
//         const num = event.target.value;
//         return num
//     }

//     const buildTable = (props) => {
//         const table = document.getElementById('tripTable')

//         for(let i=0; i<getParkNames.length; i++){
//             let row = `<tr>
//                             <td>${getParkNames[i]} ${getStateNames[i]}</td>
//                        <tr>
//                        `

//             table.innerHTML += row
//         }
//     }
   
//     useEffect(()=>{
//         buildTable();
//     }, [])
//     const getParkNames = props.allTrips;
// i need this function to show the trips generated from the get request in addtrips
// i need to show at least one trip to start
//     return(
//         <div>
//             <div>
//                 <table>
//                     <tbody id="tripTable">
//                         <tr>                        
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>

//         </div>
//     )
                        
// }