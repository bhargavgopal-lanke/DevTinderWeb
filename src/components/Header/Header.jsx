import React from "react";
import logo from "../../images/logo.jpg";
import { Link } from "react-router";

const Header = () => {
  return (
    <div>
      <header>
        <h1>
          <Link to={"/"}>DevTinder</Link>
        </h1>
        <Link to={"/login"}>Login</Link>
        <img src={logo} alt="logo" />
      </header>
    </div>
  );
};

export default Header;
