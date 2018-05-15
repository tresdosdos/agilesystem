import React, {Component, Fragment} from 'react';
import './functionalPanel.css'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPlusSquare, faFilter, faMinusSquare } from '@fortawesome/fontawesome-free-solid/index'

export default class FunctionalPanel extends Component {
  render(){
    return (
      <Fragment>
        <div className='content__carcass__func'>
          <button className='content__carcass__func__button'>
            <FontAwesomeIcon icon={faPlusSquare}/>
          </button>
          <button className='content__carcass__func__button'>
            <FontAwesomeIcon icon={faFilter}/>
          </button>
          <button className='content__carcass__func__button'>
            <FontAwesomeIcon icon={faMinusSquare}/>
          </button>
        </div>
        <div>

        </div>
      </Fragment>
    );
  }
}
