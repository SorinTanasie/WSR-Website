import React from 'react';


import Nav from '../../components/nav-bar/nav-bar.component';
import Services from '../../components/services/services.component';
import Form from '../../components/form/form.component'
import Intro from '../../components/intro/Intro';
import About from '../../components/about-us/About';
import Portofolio from '../../components/portofolio/Portofolio';
import News from '../../components/news/News';


import "./homepage.styles.scss";

const Homepage = () => (
  
  <div>
    <Nav/>

    <div className="container">
      
      <Intro />
      <Services/>
      <About />
      <Portofolio />
      <News />
      <Form/>
    </div>

  </div>
);

export default Homepage;