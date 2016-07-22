import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import classnames from 'classnames/bind';
import 'normalize.css';

// Using CSS Modules so we assign the styles to a variable
import s from './App.styl';
const cx = classnames.bind(s);
import logo from './react-logo.png';

// Favicon link is in the template, this just makes webpack package it up for us
import './favicon.ico';

import { Container, Block, Text, Heading, Toolbar, NavItem, Space } from 'rebass'

export class Home extends React.Component {
  render() {
    return (
      <Container>
        <Block borderLeft color="blue" px={2}>
          <Heading level={1}>
            LCDproc
          </Heading>
          <Text>
            Multi-platform LCD device manager
          </Text>
        </Block>
      </Container>
    );
  }
}

export class About extends React.Component {
  render() {
    return (
      <div className={cx('page')}>
        <div className={cx('siteTitle')}>
          <h1>About Page</h1>
        </div>
        <p>Welcome to the about page...</p>
      </div>
    );
  }
}

export class NotFound extends React.Component {
  render() {
    return (
      <div className={cx('page')}>
        <h4>Not found</h4>
      </div>
    );
  }
}

/**
 * NOTE: As of 2015-11-09 react-transform does not support a functional
 * component as the base compoenent that's passed to ReactDOM.render, so we
 * still use createClass here.
 */
export class App extends React.Component {
  static propTypes = {
    children: PropTypes.any,
  }
  render() {
    return (
      <div classname={cx('App')}>
        <Toolbar>
          <NavItem is="a" href='/'>
            Home
          </NavItem>
          <NavItem is="a" href='/about'>
            About
          </NavItem>
        </Toolbar>
        {this.props.children}
      </div>
    );
  }
}
