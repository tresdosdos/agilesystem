import React, {Component, Fragment} from 'react';
import {signUp} from "../../actions/signUp";
import {connect} from "react-redux";
import {getRegistration} from "../../actions/registation";

class UserProfile extends Component{
    render(){
        return (
            <Fragment>
                <h2>{this.props.store.auth.name}</h2>
                <h3>{this.props.store.auth.rights}</h3>
                <button>Log out</button>
            </Fragment>
        );
    }
}

export default connect(
    state => ({store: state}),
    dispatch => ({
        getRegistration: (e) => {dispatch(getRegistration(e))},
        signUp: () => {dispatch(signUp())}
    })
)(UserProfile);