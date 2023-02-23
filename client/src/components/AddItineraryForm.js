import React, { useState } from 'react';

function AddItineraryForm({ user, themeParks }) {
  const [formData, setFormData] = useState({
    name: '',
    themePark: '-',
    rides: '-',
    groupSize: '',
    startDate: '',
    endDate: '',
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(r => {
        if (r.ok) {
          r.json().then(data => {
            // ....
          })
        } else {
          r.json().then(err => {
            // ....
          })
        }
      }
      )
  }

  const themeParkOptions = themeParks.map(themePark => <option key={formData.id} value={JSON.stringify(themePark)}>{themePark.name}</option>)
  const themeParkRides = formData.themePark !== '-' ? JSON.parse(formData.themePark).rides : null
  const rideOptions = formData.themePark !== '-' ? themeParkRides.map(ride => <option value={ride.id}>{ride.name}</option>) : null

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name of itinerary</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />

        <label>Theme Park</label>
        <select name="themePark" id="themeParkOptions" onChange={handleChange} value={formData.themePark}>
          <option>-</option>
          {themeParkOptions}
        </select>

        <label>Rides</label>
        <select name="themeParkRides" id="themeParkRideOptions" >
          <option>-</option>
          {rideOptions}
        </select>

        <label>Group Size</label>
        <input
          type="text"
          name="groupSize"
          onChange={handleChange}
          value={formData.groupSize}
        />

        <button>submit</button>
      </form>
    </div>
  );
}

export default AddItineraryForm;
