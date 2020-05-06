import React from 'react';


import Nav from '../../components/nav-bar/nav-bar.component';
import Services from '../../components/services/services.component';
import Form from '../../components/form/form.component'

import "./homepage.styles.scss";

const Homepage = () => (
    <div >
      <Nav/>
      <Services/>
      <Form/>
    </div>
);

export default Homepage;