import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import LogInForm from './components/LogInForm';
import RegistrationForm from './components/RegistrationForm';
import './App.css';
import Swal from 'sweetalert2';
import Footer from './components/Footer';

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
      .catch(error => Swal.fire('Error fetching users:', error));
  
   
    fetch('http://localhost:5000/studios')
      .then(res => res.json())
      .then(data => setStudios(data))
      .catch(error => Swal.fire('Error fetching studios:', error));
  
    
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
      Swal.fire("Invalid Credentials")
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
        setUsers(prevUsers => [...prevUsers, data])
        setShowRegistration(false);
        Swal.fire("Successful Registration")
      })
      
      .catch(() => {
        Swal.fire('Error during registration')
      });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  if (!isAuthenticated) {
    return (
      <div className="authContainer">
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
    <>
    <div className='bodycontainer'>
    
      <div className="headerSection">
          <Navbar onLogout={handleLogout} />
      </div>
      <div className="pageContent">
      <Outlet context={{ users, studios, currentUser, setUsers, setStudios }} />
      </div>
      </div>
      <Footer/>
      
      </>
  );
}

export default App;
