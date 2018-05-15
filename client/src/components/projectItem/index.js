import React from 'react';
import './projectItem.css'

export default function ProjectItem(props){
  const TL = props.TL.map((TL) => {
    return <img src={TL.img} alt='userAvatar' title={TL.name} key={TL.toString()} className='project__item__TL__avatar'/>
  });
  const developers = props.developers.map((dev) => {
    return <img src={dev.img} alt='userAvatar' title={dev.name} key={TL.toString()} className='project__item__dev__avatar'/>
  })
  return(
    <section className='project__item__container' onClick={props.onClick}>
      <h2 className='project__item__name'>{props.name}</h2>
      <p>{props.descr}</p>
      <h3 className='project__item__TL__name'>Team Leads:</h3>
      <div className='project__item__TL'>{TL}</div>
      <h4 className='project__item__dev__name'>Developers:</h4>
      <div className='project__item__dev'>{developers}</div>
    </section>
  );
}