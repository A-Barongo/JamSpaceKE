import React, { useState } from 'react';

function LogInForm({ onLogin }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(userName, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Username"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      />
      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <input type="submit" value="Log In" />
    </form>
  );
}

export default LogInForm;
