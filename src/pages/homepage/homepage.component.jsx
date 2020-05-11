import React from "react";

import Image1 from "../../Assets/BgShape.png";

import Nav from "../../components/nav-bar/nav-bar.component";
import Services from "../../components/services/services.component";
import Form from "../../components/form/form.component";
import Intro from "../../components/intro/Intro";
import About from "../../components/about-us/About";
import Portofolio from "../../components/portofolio/Portofolio";
import News from "../../components/news/News";

import image from "../../Assets/Illustration.png";
import Image2 from "../../Assets/BgShape.png";

import logo from '../../Assets/Vector Illustration.svg';


import "./homepage.styles.scss";

const Homepage = () => (
  <div>
    <Intro
      hText="The Spirit of Digital Agency."
      pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non elit vel enim egestas dignissim ac a nunc."
      image={image}
      shape={Image2}
    />

    <div className="container">
      <Services />
      <About logo={logo} />
      <Portofolio />
      <News />
      <Form />
    </div>
  </div>
);

export default Homepage;
