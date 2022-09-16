import React from "react";
import logo from "../images/logo.svg";

export const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Shortly" />
      <nav className="navbar">
        <box>
          <button>Features</button>
          <button>Pricing</button>
          <button>Resources</button>
        </box>
        <box>
          <button>Login</button>
          <button id="sign-up-button">Sign Up</button>
        </box>
      </nav>
    </div>
  );
};
