import React, { useState } from 'react';
import Select from 'react-select'

function AddItineraryForm({ user, themeParks, onAddItinerary }) {
  const [formData, setFormData] = useState({
    name: '',
    theme_park: '-',
    ride_ids: [],
    group_size: '',
    start_date: '',
    end_date: '',
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleRideChange(rides) {
    setFormData({
      ...formData,
      ride_ids: rides.map(ride => ride.value)
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('/itineraries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          ...formData,
          user_id: user.id
        }
      )
    })
      .then(r => {
        if (r.ok) {
          r.json().then(itinerary => {
            // ....
            onAddItinerary(itinerary)
          })
        } else {
          r.json().then(err => {
            // ....
            console.log(err)
          })
        }
      }
      )
  }

  const themeParkOptions = themeParks.map(themePark => <option key={themePark.id} value={JSON.stringify(themePark)}>{themePark.name}</option>)
  const rideOptions = []
  const options = formData.theme_park !== '-' ? JSON.parse(formData.theme_park).rides.map(ride => {
    return [...rideOptions, {value: ride.id, label: ride.name}]
  }) : []

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
        <select name="theme_park" id="themeParkOptions" onChange={handleChange} value={formData.theme_park}>
          <option>-</option>
          {themeParkOptions}
        </select>

        <label>Rides</label>
        {
          formData.theme_park !== '-' ?
          <Select options={options.flat()} onChange={handleRideChange} isMulti />
            // <select name="rides" id="themeParkRideOptions" onChange={handleChange} multiple>
            //   <option>-</option>
            //   {JSON.parse(formData.theme_park).rides.map(ride => {
            //     return (
            //   <option key={ride.id} value={ride.id}>{ride.name}</option>
            //   )
            //   })}

            // </select>
            :
            <option>Please select a theme park</option>
        }

        <label>Group Size</label>
        <input
          type="text"
          name="group_size"
          onChange={handleChange}
          value={formData.group_size}
        />

        <button>submit</button>
      </form>
    </div>
  );
}

export default AddItineraryForm;
