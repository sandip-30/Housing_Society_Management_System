import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { username, password });
      const { role } = response.data;
      if (role === 'Accountant') {
        history.push('/accountant');
      } else if (role === 'Owner') {
        history.push('/owner');
      } else if (role === 'Admin') {
        history.push('/admin');
      }
    } catch (error) {
      alert('Login failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
      <button type="button" onClick={() => history.push('/forgot-password')}>Forgot Password</button>
    </form>
  );
};

export default Login;
