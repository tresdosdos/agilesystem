import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getCredentials} from '../actions/login';
import {signIn} from '../actions/signIn'


import ValidInput from '../components/validInput';
import AuthorizationForm from '../components/authorizationForm'
import ErrorListener from '../components/errorListener';

import {userNameValidation, passwordValidation} from "../services/validationAPI";

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

  render () {
    const text = 'Sign in with existing account';
    return (
      <AuthorizationForm submit={this.props.signIn} isNameValid={this.state.isNameValid} isPasswordValid={this.state.isPasswordValid} text={text} button='Sign in'>
        <ValidInput type='text' onChange={this.inputValid} isValid={this.state.isNameValid} placeholder='username'/>
        <ValidInput type='password' onChange={this.inputValid} isValid={this.state.isPasswordValid} placeholder='password'/>
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