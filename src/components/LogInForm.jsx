import React, { useState } from 'react';

function LogInForm({ onLogin }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(userName, password);
  };

  return (
    <div className="loginFormContainer">
    <form className="loginForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="loginInput"
        placeholder="Enter Username"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      />
      <input
        type="password"
        className="loginInput"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <input type="submit" className="loginButton" value="Log In" />
    </form></div>
  );
}

export default LogInForm;
