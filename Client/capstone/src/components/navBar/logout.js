import React from 'react';
import { useHistory } from "react-router-dom";

function Logout() {
  const history = useHistory();

  function handleLogOut() {
      history.push("http://localhost:3000/"); // this is the route page we want to end up on
      sessionStorage.clear(); 
  }

  return (
    <a href type="link" onClick={handleLogOut}>Go home</a>
  );
}

export default Logout;