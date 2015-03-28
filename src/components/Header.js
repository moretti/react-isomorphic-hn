import React, { Component } from 'react';
import { Colors } from '../AppTheme';

var Style = {
  header: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.primary,
    padding: 3,
    borderTopRightRadius: 5,
  },

  logo: {
    backgroundImage: 'url(/assets/y18.gif)',
    width: 18,
    height: 18,
    border: '1px solid #fff',
  },

  logoTitle: {
    paddingLeft: 5,
    fontWeight: 800,
  },

  link: {
    paddingLeft: 5,
    textDecoration: 'none',
  }
};

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={Style.header}>
        <span style={Style.logo}/>
        <span style={Style.logoTitle}>React News</span>
        <span style={Style.link}>new |</span>
        <span style={Style.link}>comments |</span>
        <span style={Style.link}>show |</span>
        <span style={Style.link}>ask |</span>
        <span style={Style.link}>jobs |</span>
        <span style={Style.link}>submit</span>
      </div>
    );
  }
}
