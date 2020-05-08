import React from 'react';

import Image1 from "../../Assets/BgShape.png"


import Nav from '../../components/nav-bar/nav-bar.component';
import Services from '../../components/services/services.component';
import Form from '../../components/form/form.component'
import Intro from '../../components/intro/Intro';
import About from '../../components/about-us/About';
import Portofolio from '../../components/portofolio/Portofolio';
import News from '../../components/news/News';
import Footer from '../../components/footer/footer.component';


import "./homepage.styles.scss";

const Homepage = () => (
  
  <div>
    <Nav/>
    <Intro />

    <div className="container">

      
      <Services/>
      <About />
      <Portofolio />
      <News />
      <Form/>
      
    </div>
    <Footer/>
  </div>
);

export default Homepage;