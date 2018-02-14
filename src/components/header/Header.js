import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  NavBar,
  NavBarItem,
  NavBarHeader,
  NavBarHeaderItem
} from 'components/base/navBar';
import './Header.css';

export default class Header extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    isAuthorized: PropTypes.bool.isRequired,
    isAuthorizationEnabled: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      picture: PropTypes.string.isRequired,
      nickname: PropTypes.string.isRequired
    })
  };

  renderNavHeader() {
    const { isAuthorized, user } = this.props;

    return isAuthorized ? (
      <NavBarHeader>
        <NavBarHeaderItem>
          <img src={user.picture} alt="avatar" className="Header-avatar" />
        </NavBarHeaderItem>
        <NavBarHeaderItem>{user.nickname}</NavBarHeaderItem>
      </NavBarHeader>
    ) : (
      <NavBarHeader>
        <NavBarHeaderItem>Localtube</NavBarHeaderItem>
      </NavBarHeader>
    );
  }

  renderNavBody() {
    const {
      isAuthorized, isAuthorizationEnabled, login, logout
    } = this.props;

    if (!isAuthorizationEnabled) {
      return (
        <NavBarItem pullRight>
          Initializing authentication services...
        </NavBarItem>
      );
    }

    return (
      <NavBarItem pullRight onClick={isAuthorized ? logout : login}>
        {isAuthorized ? 'Logout' : 'Login'}
      </NavBarItem>
    );
  }

  render() {
    return (
      <NavBar>
        {this.renderNavHeader()}
        {this.renderNavBody()}
      </NavBar>
    );
  }
}
