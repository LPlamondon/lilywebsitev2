import React, { Component } from 'react';
import logo from '../images/Lily Logo.png';

class Header extends Component {
  render(){
    return (
      <header>
        <div class="logo">
          <img class="rounded-circle mx-auto" id = "lily-logo" alt="logo" src={logo} />
        </div>
        <nav class="container">
          <ul class="row">
            <li class="col"><a href="/">Home</a></li>
            <li class="col"><a href="/intro">Intro</a></li>
            <li class="col"><a href="/work">Work</a></li>
            <li class="col"><a href="/about">About</a></li> 
            <li class="col"><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
