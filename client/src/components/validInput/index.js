import React, {Fragment} from 'react';
import './validInput.css';

export default function ValidInput(props) {
    if (props.isValid === true){
        return (<input type={props.type} onKeyDown={props.onKeyDown} onChange={props.onChange} className='credentials__match'/>);
    }
    if (props.isValid === false){
        if (props.type === 'text'){
            return (
                <Fragment>
                    <input type={props.type} onKeyDown={props.onKeyDown} onChange={props.onChange} className='credentials__not__match'/>
                    <p className='input__invalid'>*User name should be longer than 3 symbols</p>
                    <p className='input__invalid'>*It should contains only letters and numbers</p>
                </Fragment>
            );
        }
        if (props.type === 'password'){
            return (
                <Fragment>
                    <input type={props.type} onKeyDown={props.onKeyDown} onChange={props.onChange} className='credentials__not__match'/>
                    <p className='input__invalid'>*Password should be longer than 7 symbols</p>
                    <p className='input__invalid'>*It should contains at least 1 number and 1 uppercase</p>
                </Fragment>
            );
        }
    }
    return <input type={props.type} onKeyDown={props.onKeyDown} onChange={props.onChange}/>;
}