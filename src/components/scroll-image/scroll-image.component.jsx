import React from "react";

import "./scroll-image.styles.css";

const ScrollImage = ({ link, name, image }) => (
  <div class="scroll-img" href={link} style={{background:`url(${image})`}}>
    <div class="container">
      <p>{name}</p>
    </div>{" "}
  </div>
);

export default ScrollImage;
