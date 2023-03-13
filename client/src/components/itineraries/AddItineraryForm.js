import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Select from 'react-select'
import { useNavigate } from 'react-router-dom';

function AddItineraryForm({ user, themeParks, onAddItinerary }) {
  const navigate = useNavigate()
  const [itineraryErrors, setItineraryErrors] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    theme_park: '-',
    ride_ids: [],
    group_size: 1,
    start_date: '',
    end_date: ''
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
    const { name, group_size, start_date, end_date, ride_ids } = formData

    e.preventDefault()
    fetch('/itineraries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          name: name,
          group_size: group_size,
          start_date: start_date,
          end_date: end_date,
          ride_ids: ride_ids,
          user_id: user.id
        }
      )
    })
      .then(r => {
        if (r.ok) {
          r.json().then(itinerary => {
            onAddItinerary(itinerary)
            setItineraryErrors(null)
            setFormData({
              name: '',
              theme_park: '-',
              ride_ids: [],
              group_size: '',
              start_date: '',
              end_date: ''
            })
          })
        } else {
          r.json().then(err => {
            setItineraryErrors(err)
          })
        }
      }
      )
      navigate('/my-itineraries')
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
        {itineraryErrors ?
          itineraryErrors.errors.map(error => <p key={uuidv4()}>{error}</p>)
          :
          null
        }
      </form>
    </div>
  );
}

export default AddItineraryForm;
