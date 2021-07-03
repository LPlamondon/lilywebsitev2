import React, { Component } from 'react';

class Header extends Component {
  render(){
    return (
      <React.Fragment>
        <div class="logo">
          <img class="rounded-circle mx-auto" alt="logo" src="../images/Lily_Logo.png" />
        </div>
        <div class="content">
          <div class="inner">
            <h1>Lily Plamondon</h1>
            <p>A website created to showcase my porfolio using React and basing the look off a template from <a href="https://html5up.net">HTML5 UP</a>, but made to be my own.</p>
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
