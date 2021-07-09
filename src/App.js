import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './sass/main.scss'

//Component imports
import Header from './components/header';
import Footer from './components/footer';
import Index from './components/index';
import Intro from './components/intro';
import Work from './components/work';
import About from './components/about';
import Contact from './components/contact';

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Header />

        <Router>
          <Switch>
            <Route exact path="/">
              <Index />
            </Route>
            <Route exact path="/intro">
              <Intro />
            </Route>
            <Route exact path="/work">
              <Work />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Router>

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
