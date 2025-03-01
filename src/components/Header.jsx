import React from "react";
import logo from "../images/logo.jpg";

const Header = () => {
  return (
    <div>
      <header>
        <label>DevTinder</label>
        <img src={logo} alt="logo" />
      </header>
    </div>
  );
};

export default Header;
