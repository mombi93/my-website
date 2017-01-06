import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './App.css';
import FlapBox from './Flapbox';

const GITHUB_LINK = 'https://github.com/mombi93';
const LINKEDIN_LINK = 'https://uk.linkedin.com/in/mrafdi';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <FlapBox/>
          <div className="link-container">
            <a className="links" href={GITHUB_LINK} target="blank">
              <FontAwesome name="github" size="2x"/>
            </a>
            <a className="links" href={LINKEDIN_LINK} target="blank">
              <FontAwesome name="linkedin" size="2x"/></a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
