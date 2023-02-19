import React, { useState } from 'react';
// import {Label, Input} from '../styles';
// import {Input} from '../styles/Input';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch('/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />

        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />

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

        <button>Submit</button>
      </form>
    </div>
  );
}

export default Signup;
