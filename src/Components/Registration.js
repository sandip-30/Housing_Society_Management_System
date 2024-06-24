import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    flatNumber: '',
    ownerName: '',
    possessionDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/register', formData);
      alert('Registration successful!');
    } catch (error) {
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" onChange={handleChange} />
      <input type="password" name="password" onChange={handleChange} />
      <input type="text" name="flatNumber" onChange={handleChange} />
      <input type="text" name="ownerName" onChange={handleChange} />
      <input type="date" name="possessionDate" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Registration;