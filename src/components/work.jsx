import React, { Component } from 'react';

class Work extends Component {
  render(){
    return (
      <React.Fragment>
        <div class="pages rounded">
          <div class="pageContent">
            <h2>Work</h2>
            <img src = ""/>
            <p>My github can be found <a href="https://github.com/LPlamondon">, while you can download my resume [HERE]</p>
            <h4>2021</h4>
              <ul>
                <li><a href="https://www.vancouverdatajam.ca/">Vancouver Datjam - Currently working as a volunteer web developer</a></li>
                <li><a href="https://github.com/tplamondon/eilacogs">Eilacogs as a co-helper</a></li>
                <li><a href="https://github.com/SFUAnime/Ren">Ren discord bot for SFU anime</a></li>
              </ul>
            <h4>2020</h4>
            <ul>
              <li><p>Private tutor for Elementary and High-school children</p></li>
              <li><a href="https://www.vancouverdatajam.ca/">2020 Vancouver Datajam as a volunteer web developer</a></li>
            </ul>
            <h4>2019</h4>
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