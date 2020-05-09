import React from 'react';

import Homepage from './pages/homepage/homepage.component'

import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navbar from './components/nav-bar/nav-bar.component';
import Footer from './components/footer/footer.component';

import PortoPage from './components/router-pages/portofolio-page';
import AboutUs from './components/router-pages/about-us';


function App() {
  return (
    <Router>
      <Navbar />
      
      <Switch>

        <Route exact path="/despre-noi" component={AboutUs} />

        <Route exact path="/portofoliu" component={PortoPage} />

        <Route  path="/" component={Homepage} />


      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
