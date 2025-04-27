import React from 'react'
import { NavLink } from "react-router-dom";


function NavBar() {
  return (
    <div className='navbarcontainer'>
    <nav className='navbar'>
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/findstudio" className="nav-link">Find Studio</NavLink>
      <NavLink to="/mybooking" className="nav-link">My Booking</NavLink>
      <NavLink to="/newstudio" className="nav-link">New Studio</NavLink>
      <NavLink to="/about" className="nav-link">About</NavLink>
    </nav>
    </div>
  );
};

export default NavBar