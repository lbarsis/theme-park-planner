import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom'

function AddThemePark({ onAddThemePark }) {
  const navigateHome = useNavigate()
  const [themeParkErrors, setThemeParkErrors] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    state: '',
    description: ''
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('/theme_parks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(r => {
        if (r.ok) {
          r.json().then(newThemePark => {
            onAddThemePark(newThemePark)
            navigateHome('/')
          })
        } else {
          r.json().then(errors => setThemeParkErrors(errors))
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

        <label>City</label>
        <input
          type="text"
          name="city"
          onChange={handleChange}
          value={formData.city}
        />

        <label>State</label>
        <input
          type="text"
          name="state"
          onChange={handleChange}
          value={formData.state}
        />

        <label>Description</label>
        <input
          type="text"
          name="description"
          onChange={handleChange}
          value={formData.description}
        />

        <button>submit</button>
        {
          themeParkErrors ?
            themeParkErrors.errors.map(error => <p key={uuidv4()}>{error}</p>)
            :
            null
        }
      </form>

    </div>
  );
}

export default AddThemePark;
