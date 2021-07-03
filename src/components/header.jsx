import React, { Component } from 'react';
import logo from '../images/Lily_Logo.png';

class Header extends Component {
  render(){
    return (
      <React.Fragment>
        <div class="logo">
          <img class="rounded-circle mx-auto" alt="logo" src={logo} />
        </div>
        <div class="content">
          <div class="inner">
            <h1>Lily Plamondon</h1>
            <p>A website created to showcase my porfolio and experience. This website was created using React!</p>
          </div>
        </div>
        <nav>
          <ul>
            <li><a href="#intro">Intro</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
