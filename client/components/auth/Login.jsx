'use strict';
import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    }
  }
  render() {
    return(
      <div>
        Login form here
      </div>
    );
  }
}

export default Login;
