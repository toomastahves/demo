'use strict';
import React, { Component } from 'react';
import ReactRouter, { Link } from 'react-router';

let ACTIVE = { color: 'red' };

class Header extends Component {
  render() {
    return(
      <div>
        <Link to='home' activeStyle={ACTIVE}>Home</Link>
        <Link to='about' activeStyle={ACTIVE}>About</Link>
      </div>
    );
  }
}

export default Header;
