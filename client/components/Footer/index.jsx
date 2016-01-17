import React, { Component } from 'react';
import style from './style.css';

class Footer extends Component {
  render() {
    return (
      <div className={style.wrap}>
        <div className={style.info}>
          {'Author: Toomas Tahves'} <br />
          {'License: MIT'}
        </div>
      </div>
    );
  }
}
export default Footer;
