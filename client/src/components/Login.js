import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

function Login({ onLogin }) {
  const navigate = useNavigate()
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
          r.json().then(user => {
            onLogin(user)
          })
        } else {
          r.json().then(err => {
            setErrors(err.errors)
          })
        }
      }
      )
      navigate('/')
  }

  const displayErrors = errors.map(e => <p key={e.indexOf(e)}>{e}</p>)

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
      {errors ? displayErrors : null}
    </div>
  );
}

export default Login;
