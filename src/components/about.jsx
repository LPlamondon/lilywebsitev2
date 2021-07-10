import React, { Component } from 'react';
import image from '../images/About.jpg';

class About extends Component {
  render(){
    return (
      <React.Fragment>
        <div class="pages rounded">
          <div class="pageContent">
            <h2>About</h2>
            <div><img src={image} alt="" /></div>
            <p>
              This website was built using React and Bootstrap, and hosted on AWS.
            </p>
            <p>
              The GitHub repository for the website can be found <a href="https://github.com/LPlamondon/lilywebsitev2">here.</a>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
