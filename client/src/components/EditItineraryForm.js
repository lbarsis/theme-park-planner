import React, { useState } from 'react';
import Select from 'react-select'

function EditItineraryForm({ itinerary, themeParks }) {
  const [formData, setFormData] = useState({
    id: itinerary.id,
    name: itinerary.name,
    ride_ids: itinerary.rides,
    group_size: itinerary.group_size,
    theme_park: '-',
    start_date: itinerary.start_date,
    end_date: itinerary.end_date
  })

  console.log(formData)

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
    fetch(`/itineraries/${itinerary.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          ...formData
        }
      )
    })
      .then(r => {
        if (r.ok) {
          r.json().then(itinerary => {
            // ....
            // onAddItinerary(itinerary)
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
    return [...rideOptions, { value: ride.id, label: ride.name }]
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

        <label>Start Date</label>
        <input
          type="date"
          name="start_date"
          onChange={handleChange}
          value={formData.start_date}
        />

        <label>End Date</label>
        <input
          type="date"
          name="end_date"
          onChange={handleChange}
          value={formData.end_date}
        />

        <label>Theme Park</label>
        <select className=' css-13cymwt-control' name="theme_park" id="themeParkOptions" onChange={handleChange} value={formData.theme_park}>
          <option>-</option>
          {themeParkOptions}
        </select>


        <label>Rides</label>
        {
          formData.theme_park !== '-' ?
            <Select options={options.flat()} onChange={handleRideChange} isMulti />
            :
            <option className=' css-13cymwt-control'>Please select a theme park</option>
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

export default EditItineraryForm;
