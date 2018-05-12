import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/fontawesome-free-solid/index'
import './Header.css'
import { Link } from 'react-router-dom'

export default class Header extends Component{
  render(){
    return (
      <header className="header">
        <Link to="/login"><FontAwesomeIcon className="signIn" icon={faUser}/></Link>
      </header>
    )
  }
}