import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Home from './Home';

function Navbar({ user, onLogout }) {
  const navigate = useNavigate()

  function handleLogout() {
    fetch('logout', {
      method: 'DELETE'
    })

    onLogout(null)
    navigate('/')
  }

  return (
    <div>
      {user ?
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/my-itineraries'>My-Itineraries</NavLink>
          <NavLink to='/add-itinerary'>New</NavLink>
          {/* <NavLink to='/login'>Login</NavLink> */}
          {/* <NavLink to='/signup'>Signup</NavLink> */}
          <a onClick={handleLogout}>logout</a>
        </nav>
        :
        <nav>
          <NavLink to='/'>Home</NavLink>
          {/* <NavLink to='/my-itineraries'>My-Itineraries</NavLink> */}
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/signup'>Signup</NavLink>
          {/* <button onClick={handleLogout}>logout</button> */}
        </nav>
      }
    </div>
  );
}

export default Navbar;
