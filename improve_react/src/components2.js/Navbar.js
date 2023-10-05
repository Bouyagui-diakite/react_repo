import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navlinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <nav className="primary-nav">
      <NavLink style={navlinkStyle} to="/">
        Home
      </NavLink>
      <NavLink style={navlinkStyle} to="/about">
        About
      </NavLink>

      <NavLink style={navlinkStyle} to="/products">
        Products
      </NavLink>
    </nav>
  );
};

export default Navbar;
