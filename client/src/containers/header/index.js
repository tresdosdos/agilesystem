import React, { Component, Fragment } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faSignInAlt, faUserPlus } from '@fortawesome/fontawesome-free-solid/index'
import './header.css'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import MenuItem from '../../components/menuItem';
import SlideMenu from '../../components/slideMenu';
import SignIn from '../signIn'
import SignUp from '../signUp'
import UserProfile from '../../components/userProfile';

class Header extends Component{
  render(){
    return (
      <header className="header">
        {this.props.store.auth.name || this.props.store.auth.name ? 
        (
          <UserProfile/>
        ) : 
        (
          <SlideMenu>
            <Fragment>
              <MenuItem title="Sign in">
                <SignIn/>
              </MenuItem>
              <MenuItem title="Sign Up">
                <SignUp/>
              </MenuItem>
            </Fragment>
          </SlideMenu>
        )
        }
      </header>
    )
  }
}

export default connect(
    state => ({store: state})
)(Header);