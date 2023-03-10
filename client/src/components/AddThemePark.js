import React, { useState } from 'react';

function AddThemePark() {
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
      </form>

    </div>
  );
}

export default AddThemePark;
