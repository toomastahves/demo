import React, { Component, PropTypes } from 'react';
import Layout from './Layout/';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    return (
      <Layout children={this.props.children} />
    );
  }
}
export default App;
