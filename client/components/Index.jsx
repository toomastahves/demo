'use strict';
import React, { Component } from 'react';

import Header from './header/index';
import Footer from './footer/index';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './Index.css';
import RaisedButton from 'material-ui/lib/raised-button';

class Index extends Component {
  render() {
    return (
      <div>
        <RaisedButton label='Default' />
        <Header />
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
