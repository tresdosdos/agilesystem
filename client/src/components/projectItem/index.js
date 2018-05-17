import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faDoorOpen, faListUl } from '@fortawesome/fontawesome-free-solid/index'
import projectContent from '../../services/projectContent';
import './projectItem.css'

export default class ProjectItem extends Component{
  handleClick = () =>{
    this.props.join(this.props.projectName);
  }
  render() {
    const TL = projectContent.makeTL(this.props.TL);
    const developers = projectContent.makeDev(this.props.developers);
    return(
      <section className='project__item__container' onClick={this.props.onClick}>
        <h2 className='project__item__name'>{this.props.projectName}</h2>
        <p>{this.props.descr}</p>
        <div className='project__item__sub__container'>
          <div className='project__item__c2'>
            <div className='project__item'>
              <h3>Team Leads:</h3>
              {TL}
            </div>
            <div className='project__item'>
              <h4>Developers:</h4>
              {developers}
            </div>
          </div>
          <div className='project__item__sub__button__container'>
            <button title='Join this project' className='project__item__sub__button' disabled={this.props.disabled} onClick={this.handleClick}><FontAwesomeIcon icon={faDoorOpen}/></button>
            <button title='Check project tasks' className='project__item__sub__button'><FontAwesomeIcon icon={faListUl}/></button>
          </div>
        </div>
      </section>
    );
  }
}