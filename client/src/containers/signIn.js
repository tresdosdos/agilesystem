import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCredentials} from '../actions/credentials';
import {signIn} from '../actions/signIn'
import ValidInput from '../components/validInput';
import AuthorizationForm from '../components/authorizationForm'
import ErrorListener from '../components/errorListener';
import '../App.css'

class SignIn extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isNameValid: '',
      isPasswordValid: ''
    };
    this.inputValid = this.inputValid.bind(this);
  }

  passwordValidation = (e) => {
    const {value} = e.target;
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/.test(value);
  };

  userNameValidation = (e) => {
    const {value} = e.target;
    return /^[A-Za-z0-9]{3,}$/.test(value);
  };

  inputValid (e) {
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
  }

  render () {
    return (
      <AuthorizationForm submit={this.props.signIn} isNameValid={this.state.isNameValid} isPasswordValid={this.state.isPasswordValid}>
        <ValidInput type='text' onChange={this.inputValid} isValid={this.state.isNameValid}/>
        <ValidInput type='password' onChange={this.inputValid} isValid={this.state.isPasswordValid}/>
        {this.props.store.errors.signIn ? (<ErrorListener error={this.props.store.errors.signIn}/>) : null}
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