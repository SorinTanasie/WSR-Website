import React from 'react';


import Nav from '../../components/nav-bar/nav-bar.component';
import Services from '../../components/services/services.component';
import Form from '../../components/form/form.component'
import Intro from '../../components/intro/Intro';
import About from '../../components/about-us/About';
import Portofolio from '../../components/portofolio/Portofolio';
import "./homepage.styles.scss";

const Homepage = () => (
  
  <div>
    <Nav/>

    <div className="container">
      
      <Intro />
      <Services/>
      <About />
      <Portofolio />
      <Form/>
    </div>

  </div>
);

export default Homepage;