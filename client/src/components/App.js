import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar';
import Home from './themeParks/Home';
import Signup from './Signup';
import Login from './Login'
import UserItineraries from './users/UserItineraries';
import AddItineraryForm from './itineraries/AddItineraryForm';
import Users from './users/Users';
import AddThemePark from './themeParks/AddThemePark';
import AddRide from './rides/AddRide';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [themeParks, setThemeParks] = useState([])
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    fetch('/theme_parks')
      .then(r => {
        if (r.ok) {
          r.json().then(themeParks => setThemeParks(themeParks))
        } else {
          r.json().then(errors => setErrors(errors))
        }
      })
  }, [])

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user));
      } else {
        r.json().then(errors => {
          setErrors(errors)
        })
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

  function handleAddThemePark(newThemePark) {
    setThemeParks([
      ...themeParks,
      newThemePark
    ])
  }

  function handleAddRideToThemePark(newRide) {
    const updatedThemeParks = themeParks.map(themePark => {
      if (themePark.id === newRide.theme_park.id) {
        return (
          {
            ...themePark,
            rides: [...themePark.rides, newRide]
          }
        )
      } else {
        return themePark
      }
    })
    setThemeParks(updatedThemeParks)
  }

  function handleDeleteThemePark(deletedThemePark) {
    const displayThemeParks = themeParks.filter(themePark => themePark.id !== deletedThemePark.id)
    setThemeParks(displayThemeParks)
  }

  return (
    <div className="App">
      <Navbar user={currentUser} onLogout={setCurrentUser} />
      <Routes>
        <Route path='/' element={<Home themeParks={themeParks} onDeleteThemePark={handleDeleteThemePark}/>} />
        <Route path='/my-itineraries' element={<UserItineraries user={currentUser} setErrors={setErrors} themeParks={themeParks} onDeleteItinerary={handleDeleteItinerary} onUpdateItinerary={handleUpdateItinerary} />} />
        <Route path='/add-itinerary' element={<AddItineraryForm user={currentUser} themeParks={themeParks} onAddItinerary={handleAddNewItinerary} />} />
        <Route path='/add-theme-park' element={<AddThemePark onAddThemePark={handleAddThemePark}/>}/>
        <Route path='/add-ride' element={<AddRide themeParks={themeParks} onAddRide={handleAddRideToThemePark}/>} />
        <Route path='/login' element={<Login onLogin={setCurrentUser} />} />
        <Route path='/signup' element={<Signup onLogin={setCurrentUser} />} />
        <Route path='/users' element={<Users currentUser={currentUser} />} />
      </Routes>
    </div>
  );
}

export default App;
