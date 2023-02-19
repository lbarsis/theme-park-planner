import React, { useState } from 'react';

function Login({ onLogin }) {
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
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
          r.json().then(user => onLogin(user))
        } else {
          r.json().then(err => setErrors(err.errors))
        }
      }
      )

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          value={formData.username}
        />

        <label>Password</label>
        <input
          type="text"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />

        <button>submit</button>
      </form>
    </div>
  );
}

export default Login;
