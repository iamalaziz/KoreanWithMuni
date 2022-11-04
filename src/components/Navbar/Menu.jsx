import React from "react";
import { NavLink } from "react-router-dom";
import "./MenuStyle.css";
import { GrFormClose } from "react-icons/gr";

const Menu = ({ handleToggle }) => {
  return (
    <div className="navbar-menu">
      <div className="cross" onClick={handleToggle}>
        <GrFormClose
          style={{
            color: "#000",
            position: "absolute",
            right: "0",
            padding: "30px",
          }}
        />
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
    </div>
  );
};

export default Menu;
