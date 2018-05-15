import React, {Component} from 'react';
import {connect} from 'react-redux';

import AuthorizationForm from '../components/authorizationForm';
import ValidInput from '../components/validInput';
import ErrorListener from '../components/errorListener';
import RadioInput from '../components/radioInput';

import {userNameValidation, passwordValidation} from "../services/validationAPI";

import {signUp} from "../actions/signUp";
import {getRegistration} from "../actions/registation";

import '../App.css'

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state={
            isNameValid: '',
            isPasswordValid: ''
        }
    }

    userNameValidation = userNameValidation;

    passwordValidation  = passwordValidation;

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
        this.props.getRegistration(e);
    };
    render(){
        const content = ['Developer', 'Team Lead', 'Admin'];
        const text = 'Register a new account';
        return (
            <AuthorizationForm submit={this.props.signUp} isNameValid={this.state.isNameValid} isPasswordValid={this.state.isPasswordValid} text={text} button='Sign Up'>
                <ValidInput type='text' onChange={this.inputValid} isValid={this.state.isNameValid} placeholder='username'/>
                <ValidInput type='password' onChange={this.inputValid} isValid={this.state.isPasswordValid} placeholder='password'/>
                <div className='sign__up__radio'>
                    <RadioInput group='position' content={content} className='sign__up__radio' onChange={this.props.getRegistration}/>
                </div>
                {this.props.store.signUp.error ? (<ErrorListener error={this.props.store.signUp.error}/>) : null}
            </AuthorizationForm>
        );
    }
}

export default connect(
    state => ({store: state}),
    dispatch => ({
        getRegistration: (e) => {dispatch(getRegistration(e))},
        signUp: () => {dispatch(signUp())}
    })
)(SignUp);