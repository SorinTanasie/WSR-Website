import React from "react";
import "./Intro.scss";

const Intro = ({hText, pText, image, shape}) => (
  <div className="intro-container">
    <div className="intro-text">
      <h1>{hText}</h1>
      <p>{pText}</p>
      <div className="buttons">
        <button className="button">More about us</button>
        <button className="unstyled-button">Get in touch</button>
      </div>
    </div>

    <div className="intro-image">
      <img src={shape} className="shape2" />
      <img className="shape" src={image} />
    </div>
  </div>
);

export default Intro;
