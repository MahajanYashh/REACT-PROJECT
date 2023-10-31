import React, { useState } from 'react';
import './css/Adminlogin.css'

function AdminLogin() {

  // Adding css
  const full = {
    backgroundColor: 'dodgerblue',
    width: '600px ',
    // justifyContent:'center',
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (username === 'Admin' && password === 'Admin123') {
      // Successful login, redirect to the admin page
      window.location.href = '/Admin'; // Change the URL to the desired admin page
    } else {
      setErrorMessage('Access Denied');
    }
  };

  return (
    <div className="admin-login" >
      <div className='outlook'>

        <h1>Admin Login</h1>

          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
<div className="error-message">{errorMessage}</div>
      </div>
    </div>
  );
}

export default AdminLogin;
