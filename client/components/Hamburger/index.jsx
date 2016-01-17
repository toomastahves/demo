import React, { Component } from 'react';
import style from './style.css';

class Hamburger extends Component {
  render() {
    return (
      <div className={style.hamburger}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}
export default Hamburger;
