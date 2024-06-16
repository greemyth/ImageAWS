import React, { useState } from 'react';
import axios from 'axios'; // Assuming you use axios for HTTP requests
import { useNavigate } from 'react-router-dom';
import './login.css'; // Import your CSS file

const Login = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://714e5fdhu8.execute-api.us-east-1.amazonaws.com/dev/auth', {
        username,
        password
      });

      if (response.data.message === 'Authentication successful') {
        localStorage.setItem('token', response.data.token); 
        setLoggedIn(true); 
        navigate('/upload'); 
      } else {
        alert('Authentication failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Error during login. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
