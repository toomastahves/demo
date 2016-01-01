'use strict';
import React, { Component } from 'react';
import { PropTypes as RouterPropTypes } from 'react-router';

class Login extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount() {
    this.setState({ error: true });
  }
  static contextTypes = {
    history: RouterPropTypes.history
  }
  handleSubmit(e) {
    e.preventDefault();
    const email = this.refs.email.value;
    const pass = this.refs.pass.value;
    if(!this.state.error) {
      this.context.history.pushState(null, '/');
    }
  }
  handleChange(e) {
    const email = this.refs.email.value;
    if(email !== 'tom') {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
    }
  }
  render() {
    return(
      <div>
        Login<br/>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <input id='email' ref='email' type='text' />
          <input id='pass' ref='pass' type='text' />
          <button type='submit'>Login</button>
          {this.state.error && (<span>bad login</span>)}
        </form>
      </div>
    );
  }
}

export default Login;
