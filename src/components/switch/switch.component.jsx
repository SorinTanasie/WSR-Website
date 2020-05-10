import React from "react";

import "./switch.styles.scss";

const Switch = ({ show, showFirst, showSecound, content1, content2 }) => {
  return (
    <div>
      <div className="switch">
        <h1
          class={` ${show ? "switch-active" : ""}`}
          onClick={showFirst}
        >
          Design
        </h1>
        <h1
          class={`${show ? "" : "switch-active"}`}
          onClick={showSecound}
        >
          Web Development
        </h1>
      </div>

      <div className="sectiune">{show ? content1 : content2}</div>
    </div>
  );
};
export default Switch;
