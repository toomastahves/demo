'use strict';
import React, { Component } from 'react';
import Header from './header/index';
import Footer from './footer/index';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './Index.css';
import Auth from './auth/Auth';

class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Auth />
        <ReactCSSTransitionGroup component='div' transitionName='indexAnimation'
          transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname
          })}

        </ReactCSSTransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default Index;
