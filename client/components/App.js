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

        <Text>
          LCDproc is a client/server suite including drivers for all kinds of nifty LCD
          devices. The server works with different display sizes and supports all sorts
          of hardware, and supports a wide variety of clients running locally or over the
          network (or both) to display information.
        </Text>

        <Section>
          <Panel theme="default" mr={3}>
            <PanelHeader inverted theme="default">
              Downloads
            </PanelHeader>

            <TiDownload /> v5.0.7 (source)
          </Panel>
          <Flex sm gutter={2}>
            <LinkBlock is="a" href='/hardware'>
              <Card rounded m={2} p={2} width={300}>
                <Flex align='center'>
                  <Heading level={1} pb={2}>
                    Hardware
                  </Heading>
                  <Space auto />
                  <Heading level={1} pb={2}>
                    <TiSpanner />
                  </Heading>
                </Flex>
                <Text>
                  LCDproc supports all sorts of display devices using a variety of
                  physical connections (including serial, parallel and USB).
                  On-device keys/buttons and remote control devices can be used to
                  control the display and interact with its contents.
                </Text>
              </Card>
            </LinkBlock>

            <LinkBlock is="a" href='/clients'>
              <Card rounded m={2} p={2} width={300}>
                <Flex align='center'>
                  <Heading level={1} pb={2}>
                    Clients
                  </Heading>
                  <Space auto />
                  <Heading level={1} pb={2}>
                    <TiFlowMerge />
                  </Heading>
                </Flex>
                <Text>
                  Clients provide screens to be displayed on LCDproc-powered devices.
                  Display system status (CPU load, memory usage, etc.), log entries,
                  date & time, media information (i.e. "now playing") and more with
                  a wide selection of clients. Multiple systems can share a single
                  display over the network.
                </Text>
              </Card>
            </LinkBlock>

            <LinkBlock is="a" href='/docs'>
              <Card rounded m={2} p={2} width={300}>
                <Flex align='center'>
                  <Heading level={1} pb={2}>
                    Documentation
                  </Heading>
                  <Space auto />
                  <Heading level={1} pb={2}>
                    <TiMortarBoard />
                  </Heading>
                </Flex>
                <Text>
                  LCDproc provides an easy-to-use API to display your own
                  custom content on any supported display. Have a display
                  device we don't support? LCDproc is modular, so you can add
                  a new driver for your new hardware with ease.
                </Text>
                <br />
                <Text>
                  Build instructions, hardware setup guides, client/server configuration,
                  client development and more are covered in LCDproc's documentation.
                </Text>
              </Card>
            </LinkBlock>
          </Flex>

          <Flex sm gutter={2}>
            <LinkBlock is="a" href='/screenshots'>
              <Card rounded m={2} p={2} width={300}>
                <Flex align='center'>
                  <Heading level={1} pb={2}>
                    Screenshots
                  </Heading>
                  <Space auto />
                  <Heading level={1} pb={2}>
                    <TiCamera />
                  </Heading>
                </Flex>
                <Text>
                  See LCDproc in action!
                </Text>
              </Card>
            </LinkBlock>

            <LinkBlock is="a" href='/faq'>
              <Card rounded m={2} p={2} width={300}>
                <Flex align='center'>
                  <Heading level={1} pb={2}>
                    FAQ
                  </Heading>
                  <Space auto />
                  <Heading level={1} pb={2}>
                    <TiInfo />
                  </Heading>
                </Flex>
                <Text>
                  Would you like to know more?
                </Text>
              </Card>
            </LinkBlock>

            <LinkBlock is="a" href='/fun'>
              <Card rounded m={2} p={2} width={300}>
                <Flex align='center'>
                  <Heading level={1} pb={2}>
                    Fun Uses
                  </Heading>
                  <Space auto />
                  <Heading level={1} pb={2}>
                    <TiLightbulb />
                  </Heading>
                </Flex>
                <Text>
                  Over the years, LCDproc's users have come up with quite a few
                  interesting use cases. See some of them in our showcase!
                </Text>
              </Card>
            </LinkBlock>
          </Flex>
        </Section>


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
