import React, { Component, Fragment } from 'react'
import './slideMenu.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/fontawesome-free-solid/index'

export default class SlideMenu extends Component{
    constructor(props){
        super(props)
        this.state={
            isVisible: false
        }
    }
    handleClick = () => {
        this.setState({isVisible: !this.state.isVisible})
    }
    render(){
        return(
            <Fragment>
                <ReactCSSTransitionGroup component={Fragment} transitionName="slideMenu" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                    <FontAwesomeIcon className="fa-2x slideMenu__icon" icon={this.state.isVisible?faTimes:faBars} onClick={this.handleClick}>Menu</FontAwesomeIcon>
                    {
                        this.state.isVisible?
                        (
                                <div className="slideMenu">
                                    {this.props.children}
                                </div>
                        ):
                        null
                    }
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}