import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import Rides from './Rides'
import Signup from './Signup';
import Login from './Login'
import UserItineraries from './UserItineraries';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [themeParks, setThemeParks] = useState([])

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
      }
    });
  }, []);

  return (
    <div className="App">
      <Navbar onLogout={setCurrentUser} />
      <Routes>
        <Route path='/' element={<Home themeParks={themeParks} />} />
        <Route path='/rides' element={<Rides />} />
        <Route path='/login' element={<Login onLogin={setCurrentUser} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/my-itineraries' element={<UserItineraries user={currentUser} />} />
      </Routes>
    </div>
  );
}

export default App;
