import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Container,
  Menu,
  Responsive,
  Segment,
  Divider,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'gatsby';
import { SET_CURRENT_PAGE } from '../modules/actionTypes';
import logo from '../images/icon.png'


const styles = {
  menuLink: { padding: '1em 2.5em', color: '#333' },

  
};

/* global window */
const getWidth = () => {
  const isSSR = typeof window === 'undefined';
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class DesktopContainer extends Component {
  onMenuClick = (page) => {
    const { setCurrentPage } = this.props;
    setCurrentPage(page);
  }

  render() {
    const { children, currentPage } = this.props;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Segment
          textAlign="center"
          style={{ minHeight: 100, padding: '1em 0em' }}
          vertical
        >
          <Menu
            fixed="top"
            pointing
            secondary
            size="large"
          >
            <Container text>
            
            <Menu.Item style={{ padding: 0 }} as="span">
                <Link style={styles.menuLink} to="/" onClick={() => this.onMenuClick('home')}><h1><img src={logo} className="favicon" alt="favicon" />/g3tux/</h1></Link>
            </Menu.Item>

              <Menu.Item style={{ padding: 0 }} as="span" active={currentPage === 'home'}>
                <Link style={styles.menuLink} to="/" onClick={() => this.onMenuClick('home')}>Home</Link>
              </Menu.Item>
              <Menu.Item style={{ padding: 0 }} as="span" active={currentPage === 'dev'}>
                <Link style={styles.menuLink} to="/dev" onClick={() => this.onMenuClick('dev')}>Project</Link>
              </Menu.Item>
              <Menu.Item style={{ padding: 0 }} as="span" active={currentPage === 'articles'}>
                <Link style={styles.menuLink} to="/articles" onClick={() => this.onMenuClick('articles')}>Articles</Link>
              </Menu.Item>
              <Menu.Item style={{ padding: 0 }} as="span" active={currentPage === 'me'}>
                <Link style={styles.menuLink} to="/me" onClick={() => this.onMenuClick('me')}>About</Link>
              </Menu.Item>
            </Container>
          </Menu>
          <div style={{ minHeight: '2.85714286em' }} />
          <br />
          {children}
          <Divider className="footer-divider" />
          <footer style={{ marginTop: '3em', marginBottom: '5em' }}>
            {`© ${new Date().getFullYear()} Edy Tama Kusumajaya, All rights deserved`}
          </footer>
        </Segment>
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  currentPage: PropTypes.string.isRequired,
};

export default connect(
  state => ({
    currentPage: state.pageState.currentPage,
  }),
  dispatch => ({
    setCurrentPage: currentPage => dispatch({ type: SET_CURRENT_PAGE, payload: { currentPage } }),
  }),
)(DesktopContainer);
