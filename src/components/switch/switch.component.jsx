import React from "react";

import "./switch.styles.scss";

const Switch = ({ show, showFirst, showSecound, content1, content2 }) => {
  return (
    <div>
      <div className="switch">
        <h1 class="clienti switch-active" onClick={showFirst}>
          Design
        </h1>
        <h1 class="furnizori" onClick={showSecound}>
          Web Development
        </h1>
      </div>

      <div className="sectiune">{show ? <div>{content1}</div> : content2}</div>
    </div>
  );
};
export default Switch;
