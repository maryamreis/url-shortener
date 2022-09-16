import React from "react";
import working from "../images/illustration-working.svg";

export const Body = () => {
  return (
    <div className="body">
      <div className="body-header">
        <box>
          <header className="heading">More than just shorter links</header>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button>Get Started</button>
        </box>
        <box className="cropped">
          <img src={working} className="working-image" />
        </box>
      </div>
    </div>
  );
};
