import React from 'react';
import FontAwesome from 'react-fontawesome';
import 'velocity-animate';
import 'velocity-animate/velocity.ui';
import './HomePage.css';
import FlapBox from '../Flapbox';

const GITHUB_LINK = 'https://github.com/mombi93';
const LINKEDIN_LINK = 'https://uk.linkedin.com/in/mrafdi';
const STACK_OVERFLOW_LINK = 'https://stackoverflow.com/story/d-reaper';

const HomePage = () => (
  <div className="App">
    <div className="flex-view content">
      <FlapBox/>
      <div className="flex-view link-container">
        <a className="links" href={GITHUB_LINK} target="blank">
          <FontAwesome name="github" size="2x"/>
        </a>
        <a className="links" href={LINKEDIN_LINK} target="blank">
          <FontAwesome name="linkedin" size="2x"/>
        </a>
        <a className="links" href={STACK_OVERFLOW_LINK} target="blank">
          <FontAwesome name="stack-overflow" size="2x"/>
        </a>
      </div>
    </div>
  </div>
);

export default HomePage;
