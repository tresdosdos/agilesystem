import React, {Component, Fragment} from 'react';
import './functionalPanel.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPlusSquare, faFilter, faMinusSquare } from '@fortawesome/fontawesome-free-solid/index';
import {KEYBOARD} from '../../services/validationAPI';
import {store} from '../../App';
import privacyAPI from '../../services/privacyAPI';
import { connect } from 'react-redux'
import { addProject, getProjectCredentials } from '../../actions/projects'

class FunctionalPanel extends Component {
  constructor(props){
    super(props);
    this.state={
      add: false
    }
  }
  handleAdd = () =>{
    this.setState((prevState) => {
      return {
        add: !prevState.add
      }
    })
  }
  openInput = () =>{
    if (this.state.add) return '';
    else return '__hidden';
  }
  handleEnter = (e) => {
    if (e.keyCode === KEYBOARD.ENTER) {
      if (store.getState().projects.projectName) {
        this.handleSubmit();
      }
    }
  }
  handleSubmit = () => {
    //if (store.getState().projects.projectName.length > 30) return;
    //if (store.getState().projects.description.length > 40) return;
    this.props.addProject();
    this.setState((prevState) => {
      return {
        add: !prevState.add
      }
    })
  }
  render(){
    const addClassName = 'content__carcass__add' + this.openInput();
    const filterClassName = 'content__carcass__filter' + this.openInput();
    const disabled = privacyAPI.checkDeveloper(this.props.store.auth.rights);
    return (
      <Fragment>
        <div className='content__carcass__func'>
          <button className='content__carcass__func__button' onClick={this.handleAdd} disabled={disabled}>
            <FontAwesomeIcon icon={faPlusSquare}/>
          </button>
          <button className='content__carcass__func__button'>
            <FontAwesomeIcon icon={faFilter}/>
          </button>
          <button className='content__carcass__func__button' disabled={disabled}>
            <FontAwesomeIcon icon={faMinusSquare}/>
          </button>
        </div>
        <div className='content__carcass__func__container1'>
          <div className={addClassName}>
            <input type='text' placeholder='project name' id='projectName' className='content__carcass__func__input' onKeyDown={this.handleEnter} onChange={this.props.getProjectCredentials}/>
            <input type='text' placeholder='project description' id='projectDescr' className='content__carcass__func__input' onKeyDown={this.handleEnter} onChange={this.props.getProjectCredentials}/>
            <button className='content__carcass__func__submit__button' onClick={this.handleSubmit}>Create</button>
          </div>
        </div>
      </Fragment>
    );
  }
}


export default connect(
  state => ({store: state}),
  dispatch => ({
    addProject: () => {dispatch(addProject())},
    getProjectCredentials: (e) => {dispatch(getProjectCredentials(e))},
  })
)(FunctionalPanel);