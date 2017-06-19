// This is adapted from box implementation in velocity-react examples

import _ from 'lodash';
import React, { Component } from 'react';
const COLOR_BLACK = '#000';

class Box extends Component {
  componentWillReceiveProps(props) {
    this.props = {
      ...this.props,
      props
    };
  }
  render () {
    const style = _.extend({}, {
      height: '140px',
      width: '140px',
      marginLeft: '10px',
      backgroundColor: this.props.underneath ? 'none' : COLOR_BLACK,
      textAlign: 'center',
      fontSize: 80,
      fontFamily:'times',
      color: '#fff',
      cursor: 'pointer',
      borderRadius: '5%',
      position: this.props.underneath ? '' : 'relative',
    }, this.props.style);

    const instructionStyle = {
      position: 'absolute',
      bottom: 3,
      left: 0,
      right: 0,
      fontSize: '11px',
      fontWeight: 'normal',
      textTransform: 'uppercase',
      color: '#eee',
      opacity: 0.4,
    };

    // Pass any props that are not our own on through.
    const restProps = _.omit(this.props, _.keys(this.constructor.propTypes));

    // outer div below absorbs Velocity's display: block behavior, keeping it from overwriting
    // the display: flex
    return (
      <div style={{margin: 10}}>
        <div {...restProps} className="flex-box flex-column justify-content-center align-items-center user-select-none" style={style}>
          {this.props.children}
          {this.props.instruction ? <div style={instructionStyle}>{this.props.instruction}</div> : null}
        </div>
      </div>
    );
  }
}

Box.defaultProps = {
  style: {},
  underneath: false,
  instruction: '',
};

Box.propTypes = {
  style: React.PropTypes.object,
  underneath: React.PropTypes.bool,
  instruction: React.PropTypes.string,
};

export default Box;
