import React from 'react';

export default function ValidInput(props) {
    if (props.isValid === true){
        return (<input type={props.type} onKeyDown={props.onKeyDown} onChange={props.onChange} className='credentials_match'/>);
    }
    if (props.isValid === false){
        return (<input type={props.type} onKeyDown={props.onKeyDown} onChange={props.onChange} className='credentials_not_match'/>);
    }
    return (<input type={props.type} onKeyDown={props.onKeyDown} onChange={props.onChange}/>);
}