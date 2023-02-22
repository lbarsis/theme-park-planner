import React from 'react';
import { NavLink } from 'react-router-dom';
import Home from './Home';

function Navbar({ user, onLogout }) {

  function handleLogout() {
    fetch('logout', {
      method: 'DELETE'
    })

    onLogout(null)
    return <Home />
  }

  return (
    <div>
      {user ?
        <div>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/my-itineraries'>My-Itineraries</NavLink>
          {/* <NavLink to='/login'>Login</NavLink> */}
          {/* <NavLink to='/signup'>Signup</NavLink> */}
          <button onClick={handleLogout}>logout</button>
        </div>
        :
        <div>
          <NavLink to='/'>Home</NavLink>
          {/* <NavLink to='/my-itineraries'>My-Itineraries</NavLink> */}
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/signup'>Signup</NavLink>
          {/* <button onClick={handleLogout}>logout</button> */}
        </div>
      }
    </div>
  );
}

export default Navbar;
