import React, {Component} from 'react';
import {connect} from 'react-redux';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/fontawesome-free-solid'
import {getCredentials} from '../actions/login';
import {signIn} from '../actions/signIn'


import ValidInput from '../components/validInput';
import AuthorizationForm from '../components/authorizationForm'
import ErrorListener from '../components/errorListener';

import {userNameValidation, passwordValidation, KEYBOARD} from "../services/validationAPI";

import '../App.css'



class SignIn extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isNameValid: '',
      isPasswordValid: ''
    };
  }

  passwordValidation = passwordValidation;

  userNameValidation = userNameValidation;

  inputValid = (e) => {
    const {type} = e.target;
    if (type === 'text') {
      this.setState({
        isNameValid: this.userNameValidation(e)
      });
    }
    else {
      this.setState({
        isPasswordValid: this.passwordValidation(e)
      });
    }
    this.props.getCredentials(e);
  };

    handleEnter = (e) =>{
        if (e.keyCode === KEYBOARD.ENTER){
            if (this.state.isNameValid && this.state.isPasswordValid){
                this.props.signIn();
            }
        }
    };

  render () {
    return (
      <AuthorizationForm submit={this.props.signIn} isNameValid={this.state.isNameValid} isPasswordValid={this.state.isPasswordValid} button='Sign in'>
        <div><FontAwesomeIcon icon={faUser}/><ValidInput type='text' onChange={this.inputValid} isValid={this.state.isNameValid} onKeyDown={this.handleEnter} placeholder='username'/></div>
        <div><FontAwesomeIcon icon={faLock}/><ValidInput type='password' onChange={this.inputValid} isValid={this.state.isPasswordValid} onKeyDown={this.handleEnter} placeholder='password'/></div>
        {this.props.store.signIn.error ? (<ErrorListener error={this.props.store.signIn.error}/>) : null}
      </AuthorizationForm>
    );
  }
}

export default connect(
    state => ({store: state}),
    dispatch => ({
        getCredentials: (e) => {dispatch(getCredentials(e))},
        signIn: () => {dispatch(signIn())}
    })
)(SignIn);