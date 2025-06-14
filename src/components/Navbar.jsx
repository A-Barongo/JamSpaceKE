import React from 'react'
import { NavLink } from "react-router-dom";


function NavBar({onLogout}) {
  return (
    <div className='navbarcontainer'>
      
    <nav className='navbar'>
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/findstudio" className="nav-link">Find Studio</NavLink>
      <NavLink to="/mybooking" className="nav-link">My Booking</NavLink>
      <NavLink to="/newstudio" className="nav-link">New Studio</NavLink>
      <NavLink to="/about" className="nav-link">Contact Us</NavLink>
      <button onClick={onLogout} id='logOutBtn'>LogOut</button>
    </nav>
    </div>
  );
};

export default NavBar