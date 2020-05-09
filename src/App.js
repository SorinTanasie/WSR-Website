import React from 'react';

import Homepage from './pages/homepage/homepage.component'

import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navbar from './components/nav-bar/nav-bar.component';
import PortoPage from './components/router-pages/portofolio-page';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />

        <Route exact path="/portofolio" component={PortoPage} />

      </Switch>
    </Router>
  );
}

export default App;
