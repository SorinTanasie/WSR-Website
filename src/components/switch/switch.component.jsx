import React from "react";

import "./switch.styles.scss";

const Switch = ({ show, showFirst, showSecound, content1, content2 }) => {
  return (
    <div>
      <div className="switch">
        <button
          class={` ${show ? "switch-active" : ""}`}
          onClick={showFirst}
        >
          UI/UX
        </button>
        <button
          class={`${show ? "" : "switch-active"}`}
          onClick={showSecound}
        >
          Websites
        </button>
      </div>

      <div className="sectiune">{show ? content1 : content2}</div>
    </div>
  );
};
export default Switch;
