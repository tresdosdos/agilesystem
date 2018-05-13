import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faSignInAlt, faUserPlus } from '@fortawesome/fontawesome-free-solid/index'
import './header.css'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import {signUp} from "../../actions/signUp";
import {getRegistration} from "../../actions/registation";

import UserProfile from '../../components/userProfile';

class Header extends Component{
  render(){
    return (
      <header className="header">
          {this.props.store.auth.name || this.props.store.auth.name ? (
              <UserProfile/>
          ) : (
              <div className='header__auth'>
                  {this.props.children}
                  <nav className='header__links'>
                      <Link to="/"><FontAwesomeIcon icon={faSignInAlt}/>Sign in</Link>
                      <Link to="/signUp"><FontAwesomeIcon icon={faUserPlus}/>Sign up</Link>
                  </nav>
              </div>
          )}
      </header>
    )
  }
}

export default connect(
    state => ({store: state})
)(Header);