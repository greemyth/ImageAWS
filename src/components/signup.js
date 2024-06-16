import React, { useState } from 'react';
import axios from 'axios';
import './signup.css'; 
const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('https://714e5fdhu8.execute-api.us-east-1.amazonaws.com/dev/register', {
        username: username,
        password: password
      });
      setMessage(response.data.message); 
    } catch (error) {
      console.error('Error registering user:', error);
      setMessage('Registration failed'); 
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      <p>{message}</p>
    </div>
  );
};

export default SignUp;
