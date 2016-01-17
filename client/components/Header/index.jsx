import React, { Component, PropTypes } from 'react';
import style from './style.css';
import Hamburger from '../Hamburger/';

class Header extends Component {
  static propTypes = {
    showingLeftMenu: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    return (
      <div className={style.wrap}>
        <div onClick={this.props.onClick} className={style.showHamburger}>
          <Hamburger />
        </div>
        <a href='#/home'>
          <img className={style.logo} src='/images/logo.jpg' />
        </a>
        <div className={style.title}>
          <a href='#/home'>{'Demo app'}</a>
        </div>
        <div className={style.login}>
          <a href='#/login'>{'Login'}</a>
        </div>
      </div>
    );
  }
}
export default Header;
