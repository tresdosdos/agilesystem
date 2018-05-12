import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/fontawesome-free-solid/index'
import './header.css'
import { Link } from 'react-router-dom'

export default class Header extends Component{
  render(){
    return (
      <header className="header">
          <div className='header__auth'>
              {this.props.children}
              <nav className='header__links'>
                  <Link to="/">Sign in</Link>
                  <Link to="/signUp">Sign up</Link>
              </nav>
          </div>
      </header>
    )
  }
}