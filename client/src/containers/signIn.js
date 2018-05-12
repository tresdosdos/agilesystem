import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCredentials} from '../actions/credentials';
import {logIn} from '../actions/signIn'
import ValidInput from '../components/input';
import '../App.css'

class SignIn extends Component{
    constructor(props) {
        super(props);
        this.state={
            isNameValid: '',
            isPasswordValid: ''
        };
        this.inputValid = this.inputValid.bind(this);
        this.validation = this.validation.bind(this);
    }
    validation(e){
        const {value} = e.target;
        if (value === '')
            return;
        value.trim();
        if (value === '')
            return false;
        else if (value.indexOf(' ') !== -1){
            return false;
        }
            return true;
    }
    inputValid(e){
        const {type} = e.target;
        if (type === 'text'){
            this.setState({
                isNameValid: this.validation(e)
            });
        }
        else{
            this.setState({
                isPasswordValid: this.validation(e)
            });
        }
        this.props.getCredentials(e);
    }
    render(){
        return (
            <div>
                <ValidInput type='text' onChange={this.inputValid} isValid={this.state.isNameValid}/>
                <ValidInput type='password' onChange={this.inputValid} isValid={this.state.isPasswordValid}/>
                <button onClick={this.props.logIn}>Log in</button>
                {this.props.store.errors.signIn ? (<h2>{this.props.store.errors.signIn}</h2>) : null}
            </div>
        );
    }
}

export default connect(
    state => ({store: state}),
    dispatch => ({
        getCredentials: (e) => {dispatch(getCredentials(e))},
        logIn: () => {dispatch(logIn())}
    })
)(SignIn);