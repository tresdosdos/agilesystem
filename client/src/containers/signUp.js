import React, {Component} from 'react';
import {connect} from 'react-redux';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/fontawesome-free-solid'
import AuthorizationForm from '../components/authorizationForm';
import ValidInput from '../components/validInput';
import ErrorListener from '../components/errorListener';
import DropDownList from '../components/dropDownList'
import {userNameValidation, passwordValidation, KEYBOARD} from "../services/validationAPI";

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

    handleEnter = (e) =>{
        if (e.keyCode === KEYBOARD.ENTER){
            if (this.state.isNameValid && this.state.isPasswordValid){
                this.props.signUp();
            }
        }
    };

    render(){
        const content = ['Developer', 'Team Lead', 'Admin'];
        return (
            <AuthorizationForm submit={this.props.signUp} isNameValid={this.state.isNameValid} isPasswordValid={this.state.isPasswordValid} button='Sign Up'>
                <div><FontAwesomeIcon icon={faUser}/><ValidInput type='text' onChange={this.inputValid} isValid={this.state.isNameValid} onKeyDown={this.handleEnter} placeholder='username'/></div>
                <div><FontAwesomeIcon icon={faLock}/><ValidInput type='password' onChange={this.inputValid} isValid={this.state.isPasswordValid} onKeyDown={this.handleEnter} placeholder='password'/></div>
                <DropDownList content={content} onChange={this.props.getRegistration}/>
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