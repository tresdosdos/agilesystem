import React, { Component } from 'react';
import { logout } from "../../actions/login";
import { connect } from "react-redux";
import { uploadImage } from "../../actions/uploadImage";
import './userProfile.css'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faUser, faLock, faDoorClosed } from '@fortawesome/fontawesome-free-solid'
import rightsIcon from './rights'
class UserProfile extends Component{
    render(){
        return (
            <div className='user__profile__container'>
                <div className='user__profile__avatar__container'>
                    <label className='user__profile__avatar__label'>
                        <div className='user__profile__avatar__c1'>
                            <img src={this.props.store.auth.img} alt='userAvatar' className='user__profile__avatar'/>
                        </div>
                        <input type='file' id='file' className='input__file' name='avatar' onChange={this.props.uploadImage}/>
                    </label>
                </div>
                <div className='user__info__container'>
                    <div title={this.props.store.auth.rights} className='user__profile__rights__icon'>
                        {rightsIcon[this.props.store.auth.rights]}
                    </div>
                    <h2 className='user__profile__name'>{this.props.store.auth.name}</h2>
                </div>
                <div className="user__profile__logout" title="Log Out">
                    <FontAwesomeIcon icon={faDoorClosed} onClick={this.props.logOut} className="fa-2x"/>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({store: state}),
    dispatch => ({
        logOut: () => {dispatch(logout())},
        uploadImage: (e) => {dispatch(uploadImage(e))}
    })
)(UserProfile);