import React, { Component, PropTypes } from 'react';
import {Spacing, Colors} from 'material-ui/lib/styles';

const style = {
  margin: Spacing.desktopGutter,
  backgroundColor: Colors.teal100
}

class About extends Component {
  render() {
    return(
      <div style={style}>
        <h1>About page</h1>
        <h3>About content</h3>
      </div>
    );
  }
}

export default About;
