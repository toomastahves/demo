import React, { Component, PropTypes } from 'react';
import {Spacing, Colors} from 'material-ui/lib/styles';

const style = {
  margin: Spacing.desktopGutter,
  backgroundColor: Colors.green100
}

class Home extends Component {
  render() {
    return(
      <div style={style}>
        <h1>Home page</h1>
        <h3>Home content</h3>
      </div>
    );
  }
}

export default Home;
