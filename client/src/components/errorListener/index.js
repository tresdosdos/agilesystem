import React from 'react';
import './errorListener.css'

export default function ErrorListener(props) {
    return (
        <p className='error__listener'>{props.error}</p>
    );
}