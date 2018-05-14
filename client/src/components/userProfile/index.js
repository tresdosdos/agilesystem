import React, {Component, Fragment} from 'react';
import {logout} from "../../actions/login";
import {connect} from "react-redux";
import {uploadImage} from "../../actions/uploadImage";
import './userProfile.css'

class UserProfile extends Component{
    render(){
        return (
            <div className='user__profile__container'>
                <img src={this.props.store.auth.img} alt='userAvatar' className='user__profile__avatar'/>
                <div className='user__info__container'>
                    <h2 className='user__profile__name'>{this.props.store.auth.name}</h2>
                    <h3 className='user__profile__rights'>{this.props.store.auth.rights}</h3>
                    <form ref='uploadForm'
                          id='uploadForm'
                          method='post'
                          encType="multipart/form-data">
                        <input type='file' id='file' className='input__file' name='avatar' onChange={this.props.uploadImage}/>
                        <label htmlFor="file">Change avatar</label>
                    </form>
                    <button onClick={this.props.logOut} className='user__profile__logout'>Log out</button>
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