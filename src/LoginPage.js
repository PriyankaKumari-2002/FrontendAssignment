import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = async () => {
    // Make API request to validate the login credentials
    // Use the provided API URL and login credentials here
    try {
      const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/apidoc:XooRuQbs/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      
      if (data.success) {
        setLoginMessage('Login success!');
        // Redirect to the next page or perform any necessary action
      } else {
        setLoginMessage('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>{loginMessage}</p>
    </div>
  );
};

export default LoginPage;
