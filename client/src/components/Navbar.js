import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/rides'>Rides</NavLink>
    </div>
  );
}

export default Navbar;
