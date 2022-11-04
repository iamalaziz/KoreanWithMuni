import React from "react";
import "./NavbarStyle.css";
import { NavLink } from "react-router-dom";


import { HiBars3 } from "react-icons/hi2";

const Navbar = ({handleToggle}) => {
  return (
    <div className="navbar">
      <div className="logo">
        <span>MK</span>
        <p>
          Korean
          <br />
          withMuni
        </p>
      </div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/rating">Rating</NavLink>
        </li>
        <li>
          <NavLink to="/courses">Courses</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <button className="register-btn">Get Registered</button>
      <div onClick={handleToggle} className="burger">
        <HiBars3 size="30px" />
      </div>
    </div>
  );
};

export default Navbar;
