'use strict';
import React, { Component } from 'react';
import ReactRouter, { Link } from 'react-router';
import Auth from '../auth/Auth';

let ACTIVE = { color: 'red' };

class Header extends Component {
  render() {
    return(
      <div>
        <Auth />
        <Link to='home' activeStyle={ACTIVE}>Home</Link>
        <Link to='about' activeStyle={ACTIVE}>About</Link>
        <Link to='pets' activeStyle={ACTIVE}>Pets</Link>
      </div>
    );
  }
}

export default Header;
