import React, { useState } from 'react';
import Select from 'react-select'

function AddRide({themeParks}) {
  const [formData, setFormData] = useState({
    name: '',
    thrill_level: 1,
    duration: '',
    capacity: 1,
    description: ''
  })

  const options = themeParks.map(themePark => {
    return {value: themePark.id, label: themePark.name}
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
        <Select options={options} onChange={theme_park_id => setFormData({...formData, theme_park_id})}/>

        <button>submit</button>
      </form>
    </div>
  );
}

export default AddRide;
