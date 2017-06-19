// This is adapted from Flap-box implementation in velocity-react examples

import React, { Component } from 'react';
import VelocityComponent from 'velocity-react/velocity-component';
import velocityHelpers from 'velocity-react/velocity-helpers';
import Muhammad from './Muhammad.jpg';
import Box from './Box';

/*
This demo shows how to use custom Velocity UI pack effects to achieve an animation based
on a state value.
*/

const FlipAnimations = {
  // Brings the box from flipped up to down. Also the default state that the box starts in. When
  // this animates, includes a little swing at the end so it feels more like a flap.
  down: velocityHelpers.registerEffect({
    // longer due to spring timing
    defaultDuration: 1100,
    calls: [
      [{
        transformPerspective: [ 800, 800 ],
        transformOriginX: [ '50%', '50%' ],
        transformOriginY: [ 0, 0 ],
        rotateX: [0, 'spring'],
        // We step this back immediately; you don't notice and it means we're not fading in as
        // the spring swings rotateX back and forth.
        backgroundColor: ['none', '#000'],
      }, 1, {
        delay: 100,
        easing: 'ease-in',
      }]
    ],
  }),

  // Flips the box up nearly 180°.
  up: velocityHelpers.registerEffect({
    defaultDuration: 200,
    calls: [
      [{
        transformPerspective: [ 800, 800 ],
        transformOriginX: [ '50%', '50%' ],
        transformOriginY: [ 0, 0 ],
        rotateX: 160,
        backgroundColor: '#000',
      }]
    ],
  }),
};

// Animations to blur the number within the box for when it's flipped up.
//
// Blur animations each have a delay to make them change roughly when the flip is halfway up,
// to capture the transition from front to back (and vice versa). They flip over their values
// immediately with no tweening, since that doesn't make sense for the effect. We're using
// Velocity here only to co-ordinate the timing of the change.
const BlurAnimations = {
  blur: velocityHelpers.registerEffect({
    defaultDuration: 200,
    calls: [
      [{ blur: [3, 3], opacity: [.4, .4] }, 1, { delay: 50 }],
    ],
  }),

  unblur: velocityHelpers.registerEffect({
    defaultDuration: 200,
    calls: [
      [{ blur: [0, 0], opacity: [1, 1] }, 1, { delay: 150 }],
    ],
  })
};

class FlapBox extends Component {
  constructor() {
    super();
    this.state = { hovering: false }
  }
  whenMouseEntered() {
    this.setState({ hovering: true });
  }
  whenMouseLeft() {
    this.setState({ hovering: false });
  }
  renderTop() {
    let flipAnimation;
    let contentsAnimation;

    if (this.state.hovering) {
      flipAnimation = FlipAnimations.up;
      contentsAnimation = BlurAnimations.blur;
    } else {
      flipAnimation = FlipAnimations.down;
      contentsAnimation = BlurAnimations.unblur;
    }

    const boxStyle = {
      position: 'absolute',
    };

    const logoStyle = {
      paddingTop: '15%',
    };

    return (
      <VelocityComponent animation={flipAnimation}>
        <Box style={boxStyle}>
          <VelocityComponent animation={contentsAnimation}>
            <div style={logoStyle}>M</div>
          </VelocityComponent>
        </Box>
      </VelocityComponent>
    );
  }
  renderUnderneath() {
    const imageStyle = {
      borderRadius: '5%',
      backgroundSize: 'cover',
      height: '140px',
      width: '140px',
      margin: 'auto',
    };
    return (
      <Box underneath={true}>
        <img style={imageStyle} src={Muhammad} role="presentation" />
      </Box>
    );
  }
  render() {
    const containerStyle = {
      // Neded since the "top" is absolutely positioned
      position: 'relative',
      cursor: 'default',
    };

    return (
      <div className="flex-box flex-column align-items-center">
        <div style={containerStyle}
             onMouseEnter={this.whenMouseEntered.bind(this)}
             onMouseLeave={this.whenMouseLeft.bind(this)}>
          {this.renderTop()}
          {this.renderUnderneath()}
        </div>
      </div>
    );
  }
}

export default FlapBox;
