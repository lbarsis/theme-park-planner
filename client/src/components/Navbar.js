import React, {useContext} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';

function Navbar() {
  const {user, setUser} = useContext(UserContext)
  const navigate = useNavigate()

  function handleLogout() {
    fetch('logout', {
      method: 'DELETE'
    })

    setUser(null)
    navigate('/')
  }

  return (
    <div>
      {user ?
        <nav className='navbar'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/my-itineraries'>My-Itineraries</NavLink>
          <NavLink to='/add-itinerary'>New Itinerary</NavLink>
          <NavLink to='/my-rides'>My Rides</NavLink>
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
