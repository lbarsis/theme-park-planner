import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

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
        <nav className='navbar'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/my-itineraries'>My-Itineraries</NavLink>
          <NavLink to='/add-itinerary'>New Itinerary</NavLink>
          {
            user.admin ?
              <>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/add-theme-park'>Add Theme Park</NavLink>
                <NavLink to='/add-ride'>Add Ride</NavLink>
              </>
              :
              null
          }
          {/* <NavLink to='/login'>Login</NavLink> */}
          {/* <NavLink to='/signup'>Signup</NavLink> */}
          <button className='anchor-copy' onClick={handleLogout}>Logout</button>
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
