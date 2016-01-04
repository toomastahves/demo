import React, { Component } from 'react'; // React libs
import {Link} from 'react-router'; // Router libs
import {LeftNav, ListItem} from 'material-ui'; // Left menu components
import {AppBar, Tabs, Tab} from 'material-ui'; // Top menu components

// Custom material theme libs
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';
import CustomTheme from '../CustomTheme';

const tabStyle = {
    fontSize: 24,
    paddingTop: 12,
    marginBottom: 12,
    fontWeight: 400,
};

@ThemeDecorator(ThemeManager.getMuiTheme(CustomTheme))
class Master extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      tabValue: 'home',
      title: ''
    };
  }

  handleLeftIconClick = () => {
    this.setState({open: !this.state.open});
  }

  handleAppBarLinkClick = (tab) => {
    this.props.history.replaceState({}, tab.props.route);
    this.handleTitle();
  }

  handleLeftNavClick = (e) => {
    this.setState({open: false});
    this.handleTitle();
  }

  handleTitle() {
    if(this.props.history.isActive('home'))
      this.setState({title: 'Home'});
    if(this.props.history.isActive('about'))
      this.setState({title: 'About'});
  }

  componentWillMount(){
    this.handleTitle();
  }

  render() {
    return(
      <div>
        <AppBar
          title={this.state.title}
          onLeftIconButtonTouchTap={this.handleLeftIconClick}
          iconElementRight=
          {
            <Tabs>
              <Tab label='Home' style={tabStyle} value='home' route='home' onActive={this.handleAppBarLinkClick} />
              <Tab label='About' style={tabStyle} value='about' route='about' onActive={this.handleAppBarLinkClick} />
            </Tabs>
          }
        />
        <LeftNav
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}>
          <ListItem containerElement={<Link to='home' />} onTouchTap={this.handleLeftNavClick}>Home</ListItem>
          <ListItem containerElement={<Link to='about' />} onTouchTap={this.handleLeftNavClick}>About</ListItem>
        </LeftNav>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Master;
