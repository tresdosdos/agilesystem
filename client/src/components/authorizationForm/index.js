import React, { Component } from 'react'
import './authorizationForm.css'

export default class AuthorizationForm extends Component{
  render(){
    let className = '';
    let disabled = false;
    if (this.props.isNameValid === false || this.props.isPasswordValid === false){
        className='authorization__form__submit__disable';
        disabled = true;
    }
    else{
        className='authorization__form__submit__active';
        disabled = false;
    }
    return (
      <div className="authorization__form">
        <h5>Sign in with existing account</h5>
        {this.props.children}
        <button className={className} onClick={this.props.submit} disabled={disabled}>Sign in</button>
      </div>
    )
  }
}