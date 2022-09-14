import React from "react";

export const Header = () => {
  return (
    <div className="header">
      {/* <img src={logo} alt="Shortly logo" /> */}
      <nav className="navbar">
        <box>
          <button>Features</button>
          <button>Pricing</button>
          <button>Resources</button>
        </box>
        <box>
          <button>Login</button>
          <button>Sign Up</button>
        </box>
      </nav>
    </div>
  );
};
