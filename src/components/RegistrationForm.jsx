import React, { useState } from 'react';

function RegistrationForm({ onRegister }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const bookings=[]

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = { userName, password, tel, email,bookings };
    onRegister(newUser);
  };

  return (
    <form onSubmit={handleSubmit} className='regForm'>
      <input
        type="text"
        className='regFormInput'
        placeholder="Enter Username"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      />
      <input
        type="password"
        className='regFormInput'
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <input
        type="tel"
        className='regFormInput'
        placeholder="Enter Phone Number"
        onChange={(e) => setTel(e.target.value)}
        value={tel}
      />
      <input
        type="email"
        className='regFormInput'
        placeholder="Enter Your Email Address"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input type="submit" className='regButtton' value="Register" />
    </form>
  );
}

export default RegistrationForm;
