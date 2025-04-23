import React from 'react'
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/findstudio" className="nav-link">Find Studio</NavLink>
      <NavLink to="/mybooking" className="nav-link">My Booking</NavLink>
      <NavLink to="/newtudio" className="nav-link">New Studio</NavLink>

      <NavLink to="/about" className="nav-link">About</NavLink>
    </nav>
  );
};

export default NavBar