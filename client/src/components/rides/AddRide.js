import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select'

function AddRide({ themeParks, onAddRide }) {
  const navigateHome = useNavigate()
  const [rideErrors, setRideErrors] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    thrill_level: 1,
    duration: '',
    capacity: 1,
    description: '',
    theme_park_id: {value: '', label: '-'}
  })

  const options = themeParks.map(themePark => {
    return { value: themePark.id, label: themePark.name }
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('/rides', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        theme_park_id: formData.theme_park_id.value
      })
    })
      .then(r => {
        if (r.ok) {
          r.json().then(newRide => {
            onAddRide(newRide)
            navigateHome('/')
          })
        } else {
          r.json().then(errors => setRideErrors(errors))
        }
      })
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name of Theme Park</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />

        <label>thrill_level</label>
        <input
          type="text"
          name="thrill_level"
          onChange={handleChange}
          value={formData.thrill_level}
        />

        <label>duration</label>
        <input
          type="text"
          name="duration"
          onChange={handleChange}
          value={formData.duration}
        />

        <label>capacity</label>
        <input
          type="text"
          name="capacity"
          onChange={handleChange}
          value={formData.capacity}
        />

        <label>description</label>
        <input
          type="text"
          name="description"
          onChange={handleChange}
          value={formData.description}
        />

        <label>theme_park_id</label>
        <Select options={options} onChange={theme_park_id => setFormData({ ...formData, theme_park_id })} />

        <button>submit</button>

        {
          rideErrors ?
            rideErrors.errors.map(error => <p key={uuidv4()}>{error}</p>)
            :
            null
        }

      </form>
    </div>
  );
}

export default AddRide;
