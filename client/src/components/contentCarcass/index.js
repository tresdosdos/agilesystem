import React from 'react';
import './contentCarcass.css';
import FunctionalPanel from '../functionalPanel';



export default function ContentCarcass(props){
    return (
      <section className='content__carcass__container'>
        <h2 className='content__carcass__header'>{props.header}</h2>
        <FunctionalPanel/>
        <div className='content__carcass__main'>
         
        </div>
      </section>);
}