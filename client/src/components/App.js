import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import Signup from './Signup';
import Login from './Login'
import UserItineraries from './UserItineraries';
import AddItineraryForm from './AddItineraryForm';
import Users from './Users';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [themeParks, setThemeParks] = useState([])
  const [errors, setErrors] = useState(null)
  const [users, setUsers] = useState([])
  const [userErrors, setUserErrors] = useState(null)

  useEffect(() => {
    fetch('/users').then(r => {
      if (r.ok) {
        r.json().then(users => setUsers(users))
      } else {
        r.json().then(errors => setUserErrors(errors))
      }
    })
  }, [])

  useEffect(() => {
    fetch('/theme_parks')
      .then(r => r.json())
      .then(themeParks => setThemeParks(themeParks))
  }, [])

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user));
      } else {
        r.json().then(errors => setErrors(errors))
      }
    });
  }, []);

  function handleAddNewItinerary(itinerary) {
    setCurrentUser({
      ...currentUser,
      itineraries: [...currentUser.itineraries, itinerary]
    })
  }

  function handleDeleteItinerary(deletedItineraryId) {
    const newItinerariesList = currentUser.itineraries.filter(itinerary => itinerary.id !== deletedItineraryId)
    setCurrentUser({
      ...currentUser,
      itineraries: newItinerariesList
    })
  }

  function handleUpdateItinerary(updatedItinerary) {
    const updatedItineraries = currentUser.itineraries.map(itinerary => {
      if (itinerary.id === updatedItinerary.id) {
        return updatedItinerary
      } else {
        return itinerary
      }
    })
    setCurrentUser({
      ...currentUser,
      itineraries: updatedItineraries
    })
  }

  // console.log(currentUser)

  return (
    <div className="App">
      <Navbar user={currentUser} onLogout={setCurrentUser} />
      {currentUser ?
        <Routes>
          <Route path='/' element={<Home themeParks={themeParks} />} />
          <Route path='/my-itineraries' element={<UserItineraries user={currentUser} setErrors={setErrors} themeParks={themeParks} onDeleteItinerary={handleDeleteItinerary} onUpdateItinerary={handleUpdateItinerary} />} />
          <Route path='/add-itinerary' element={<AddItineraryForm user={currentUser} themeParks={themeParks} onAddItinerary={handleAddNewItinerary} />} />
          {
            currentUser.admin ?
              <Route path='/users' element={<Users users={users} />} />
              :
              null
          }
        </Routes>
        :
        <Routes>
          <Route path='/' element={<Home themeParks={themeParks} />} />
          <Route path='/login' element={<Login onLogin={setCurrentUser} />} />
          <Route path='/signup' element={<Signup onLogin={setCurrentUser} />} />
        </Routes>
      }
    </div>
  );
}

export default App;
