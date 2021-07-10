import React, { Component } from 'react';
import image from '../images/Work.jpg';
import resume from '../files/Plamondon_Lily_Resume.pdf';

class Work extends Component {
  render(){
    return (
      <React.Fragment>
        <div class="pages rounded text-start">
          <div class="pageContent">
            <h2>Work</h2>
            <div><img src={image} alt="" /></div>
            <p>My github can be found <a href="https://github.com/LPlamondon">here</a>, while you can download my resume <a href={resume} download>here</a></p>
            <h6>2021</h6>
              <ul>
                <li><a href="https://www.vancouverdatajam.ca/">Vancouver Datjam - Currently working as a volunteer web developer</a></li>
                <li><a href="https://github.com/tplamondon/eilacogs">Eilacogs as a co-helper</a></li>
                <li><a href="https://github.com/SFUAnime/Ren">Ren discord bot for SFU anime</a></li>
              </ul>
            <h6>2020</h6>
            <ul>
              <li>Private tutor for Elementary and High-school children</li>
              <li><a href="https://www.vancouverdatajam.ca/">2020 Vancouver Datajam as a volunteer web developer</a></li>
            </ul>
            <h6>2019</h6>
              <ul>
                <li><a href="https://github.com/nyhchang/NicoBot">Nico discord bot</a></li>
              </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Work;
