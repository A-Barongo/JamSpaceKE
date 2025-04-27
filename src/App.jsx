import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import LogInForm from './components/LogInForm';
import RegistrationForm from './components/RegistrationForm';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [users, setUsers] = useState([]);
  const [studios, setStudios] = useState([]);
  const [currentUser,setCurrentUser]=useState('')
  
  const navigate = useNavigate();
  

  useEffect(() => {
    
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  
   
    fetch('http://localhost:5000/studios')
      .then(res => res.json())
      .then(data => setStudios(data))
      .catch(error => console.error('Error fetching studios:', error));
  
    
  }, [users,studios]);
  

  const handleLogin = (userName, password) => {
    const user = users.find(
      u => u.userName === userName && u.password === password
          );
      
    if (user) {
      setIsAuthenticated(true);
      navigate('/home');
      setCurrentUser(user)
    } else {
      alert('Invalid credentials');
    }
  };

  const handleRegister = (newUser) => {
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    })
      .then(res => res.json())
      .then(data => {
        setUsers(prevUsers => [...prevUsers, data]);
        setShowRegistration(false);
        alert('Registration Successful! Please log in.');
      })
      
      .catch(error => {
        console.error('Error during registration:', error);
      });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  if (!isAuthenticated) {
    return (
      <div className="auth-container">
        {showRegistration ? (
          <RegistrationForm onRegister={handleRegister} />
        ) : (
          <LogInForm onLogin={handleLogin} />
        )}
        <button onClick={() => setShowRegistration(!showRegistration)}>
          {showRegistration ? 'Back to Login' : 'Sign Up'}
        </button>
      </div>
    );
  }

  return (
    <div className='bodycontainer'>
      <div className="headerSection">
        <img src="./assets/jamspaceLogo.png" alt="JamSpace Logo" />
        <Navbar onLogout={handleLogout} />
      </div>
      <Outlet context={{ users, studios, currentUser, setUsers, setStudios }} />
      </div>
  );
}

export default App;
