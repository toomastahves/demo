import React, { Component, PropTypes } from 'react';
import style from './style.css';

class Menu extends Component {
  static propTypes = {
    showingLeftMenu: PropTypes.bool.isRequired
  };
  constructor(props) {
    super(props);
  }
  render() {
    if(!this.props.showingLeftMenu) {
      this.state = {
        menuClassName: style.menu
      };
    } else {
      this.state = {
        menuClassName: style.pushedMenu
      };
    }
    return (
      <div className={this.state.menuClassName}>
        <a className={style.menuitem} href='#/home'>{'Home'}</a>
        <a className={style.menuitem} href='#/todo'>{'Todo'}</a>
        <a className={style.menuitem} href='#/gallery'>{'Gallery'}</a>
        <a className={style.menuitem} href='#/blog'>{'Blog'}</a>
        <a className={style.menuitem} href='#/about'>{'About'}</a>
      </div>
    );
  }
}
export default Menu;
