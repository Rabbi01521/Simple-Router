import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "goldenrod",
  };
  return (
    <nav>
      <NavLink className="link" activeStyle={activeStyle} to="/home">
        Home
      </NavLink>
      <NavLink className="link" activeStyle={activeStyle} to="/friends">
        Friends
      </NavLink>
      <NavLink className="link" activeStyle={activeStyle} to="/about">
        About
      </NavLink>
    </nav>
  );
};

export default Header;
