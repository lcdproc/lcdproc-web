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

// Rebass and reflexbox elements
import { Base, Divider, Section, Card, Container, Block, LinkBlock,
  Text, Heading, Toolbar, NavItem, Space, Panel, PanelHeader, Footer } from 'rebass'
import { Flex, Box } from 'reflexbox'

// Icons
import TiDownload from 'react-icons/lib/ti/download';
import TiHome from 'react-icons/lib/ti/home';
import TiImage from 'react-icons/lib/ti/image';
import TiInfo from 'react-icons/lib/ti/info';
import TiMortarBoard from 'react-icons/lib/ti/mortar-board';
import TiSpanner from 'react-icons/lib/ti/spanner';
import TiFlowMerge from 'react-icons/lib/ti/flow-merge';
import TiLightbulb from 'react-icons/lib/ti/lightbulb';
import TiCode from 'react-icons/lib/ti/code';
import TiCamera from 'react-icons/lib/ti/camera';

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
            Home &nbsp;<TiHome />
          </NavItem>
          <NavItem is="a" href='/screenshots'>
            Screenshots &nbsp;<TiCamera />
          </NavItem>
          <NavItem is="a" href='/faq'>
            FAQ &nbsp;<TiInfo />
          </NavItem>
          <NavItem is="a" href='/docs'>
            Documentation &nbsp;<TiMortarBoard />
          </NavItem>
          <NavItem is="a" href='/hardware'>
            Hardware &nbsp;<TiSpanner />
          </NavItem>
          <NavItem is="a" href='/clients'>
            Clients &nbsp;<TiFlowMerge />
          </NavItem>
          <NavItem is="a" href='/fun'>
            Fun Uses &nbsp;<TiLightbulb />
          </NavItem>
          <Space auto x={1} />
          <NavItem is="a" href='/download'>
            Download &nbsp;<TiDownload />
          </NavItem>
          <NavItem is="a" href='https://github.com/lcdproc/lcdproc'>
            Development &nbsp;<TiCode />
          </NavItem>
        </Toolbar>
        {this.props.children}
        <Footer>
          <Flex align='center'>
            <Space auto />
            <Text>
              Copyright &copy; 1998-2017 William W. Ferrell and Selene Scriven
            </Text>
            <Space auto />
          </Flex>
        </Footer>
      </div>
    );
  }
}
