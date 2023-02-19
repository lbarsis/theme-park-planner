import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {

  function handleLogout() {
    fetch('logout',{
      method: 'DELETE'
    })
  }

  return (
    <div>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/rides'>Rides</NavLink>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/signup'>Signup</NavLink>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}

export default Navbar;
