import React, { Component } from 'react'
import './authorizationForm.css'

export default class AuthorizationForm extends Component{
  render(){
    let className = '';
    let disabled = false;
    if (this.props.isNameValid === false || this.props.isPasswordValid === false || this.props.isNameValid === ''){
        className='authorization__form__submit__disable';
        disabled = true;
    }
    else{
        className='authorization__form__submit__active';
        disabled = false;
    }
    return (
      <div className="authorization__form">
        {this.props.children}
        <button className={className} onClick={this.props.submit} disabled={disabled}>{this.props.button}</button>
      </div>
    )
  }
}