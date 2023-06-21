import React from "react";
import "./NavBar.css";

import logo from "../assets/milogo.png";
function NavBar() {
  return (
    <header className="header">
      <div className="contain-header">
        <img className="logo" alt="logoimg" src={logo} />
        <h2 className="subtitle">WelcomeCanarias</h2>
      </div>
    </header>
  );
}

export default NavBar;
