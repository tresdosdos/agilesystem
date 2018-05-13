import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
        <Link className="authorization__form__close" to="/"/>
        <h5>{this.props.text}</h5>
        {this.props.children}
        <Link to="/"><button className={className} onClick={this.props.submit} disabled={disabled}>{this.props.button}</button></Link>
      </div>
    )
  }
}