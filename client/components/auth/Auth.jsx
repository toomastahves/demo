'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }
  updateAuth(loggedIn) {
    this.setState({
      loggedIn: loggedIn
    });
  }
  render() {
    return(
      <div>
        {this.state.loggedIn ? (<Link to='logout'>Log out</Link>) : (<Link to='login'>Log in</Link>) }
      </div>
    );
  }
}

export default Auth;
