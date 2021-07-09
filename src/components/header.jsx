import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from '../images/Lily_Logo.png';

class Header extends Component {
  render(){
    return (
      <header>
        <div class="logo">
          <img class="rounded-circle mx-auto" id = "lily-logo" alt="logo" src={logo} />
        </div>
        <Router>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/intro'>Intro</Link></li>
            <li><Link to='/work'>Work</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
        </Router>
      </header>
    );
  }
}

export default Header;
