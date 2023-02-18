import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import Rides from './Rides'

function App() {

  const [themeParks, setThemeParks] = useState([])

  useEffect(() => {
    fetch('/theme_parks')
      .then(r => r.json())
      .then(themeParks => setThemeParks(themeParks))
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home themeParks={themeParks} />} />
        <Route path='/rides' element={<Rides />} />
      </Routes>
    </div>
  );
}

export default App;
