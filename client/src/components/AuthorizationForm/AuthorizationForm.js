import React, { Component } from 'react'
import './AuthorizationForm.css'

export default class AuthorizationForm extends Component{
  render(){
    return (
      <div className="authorizationForm">
        <h5>Sign in with existing account</h5>
        {this.props.children}
        <button className="submit" onClick={this.props.submit}>Sign in</button>
      </div>
    )
  }
}