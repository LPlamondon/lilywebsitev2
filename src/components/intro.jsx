import React, { Component } from 'react';

class Intro extends Component {
  render(){
    return (
      <React.Fragment>
        <div class="pages rounded">
          <div class="pageContent">
            <h2>Intro</h2>
            <img src="" alt="" />
            <h6>Who am I?</h6>
            <p>
              My name is Lily Plamondon. I went to Simon Fraser University, and graduated back in 2019. I currently live in the Greater Vancouver area.
              I speak both English and Japanese, the first one being my native langauge while the latter I learned in university.
              My hobbies include reading, writing short stories, playing video games, and watching anime.
            </p>
            <p>
              One of my favourite games is Final Fantasy 14, where I play as a Miqo'te. My main job in it is scholar, where I function as the party healer. This fits in well with
              my personality, as I prefer to quietly support others instead of taking the main focus. For books, I've mainly been reading manga lately, although if I find a good
              novel I won't hesitate to pick it up and read it, often powering through in one day.
            </p>
            <p>
              I also play a Dark Heresey 2 TTRPG homebrew with a group of online friends, where I have experience both as a player and as a gamemaster. This has been a very valuable
              experience for me to improve my creativity, as well as improving my communication skills.
            </p>
            <h6>What skills do I have?</h6>
            <p>
              I know HTML5, CSS, and Javascript. For web development frameworks, I also have experience with SASS, React, Ruby on Rails, Bootstrap, and Node.js.
              Besides web development, I am familiar with Python, C, C++, and Java. I also have some experience with Unity and C#.
            </p>
            <p>
              Besides programming languages and frameworks, I've also learned how to work in a team, communication, UI design, and mediation skills.
            </p>
            <h6>Anything else interesting about you?</h6>
            <p>
              I have a twin brother named Thomas, who's only about 2-3 minutes older than me. Growing up with a sibling I could always depend on and get along with has been
              an amazing experience, and I love him dearly.
            </p>
            <p>
              I also have dual citizenship, Canadian and Swiss. This is due to my mom coming from Switzerland, giving me Swiss citzenship by blood. I can speak a minor amount of
              German, although my Japanese is far better.
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Intro;
