import React, { Component, PropTypes } from 'react';
import Header from '../Header/';
import Footer from '../Footer/';
import Menu from '../Menu/';
import style from './layout.css';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
    this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
    this.state = {
      showingLeftMenu: false,
      menuClass: '',
      contentClass: style.wrap
    };
  }
  handleHamburgerClick() {
    this.setState({ showingLeftMenu: !this.state.showingLeftMenu });
    const showingLeftMenu = this.state.showingLeftMenu;
    if(showingLeftMenu) {
      this.setState({ menuClass: '' });
      this.setState({ contentClass: style.wrap });
    } else {
      this.setState({ menuClass: '' });
      this.setState({ contentClass: style.pushedWrap });
    }
  }
  render() {
    return (
      <div className={this.state.contentClass}>
        <div>
          <Header onClick={this.handleHamburgerClick} showingLeftMenu={this.state.showingLeftMenu} />
        </div>
        <div className={style.content}>
          <Menu showingLeftMenu={this.state.showingLeftMenu} />
          <div className={style.article}>
            {this.props.children}
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
export default Layout;
