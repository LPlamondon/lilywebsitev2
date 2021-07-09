import React, { Component } from 'react';
import logo from '../images/Lily_Logo.png';

class Header extends Component {
  render(){
    return (
      <header>
        <div class="logo">
          <img class="rounded-circle mx-auto" id = "lily-logo" alt="logo" src={logo} />
        </div>
        <nav>
          <ul>
            <li><a href="#intro">Intro</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
