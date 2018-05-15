import React, { Component, Fragment } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './menuItem.css'

export default class MenuItem extends Component{
    constructor(props){
        super(props)
        this.state={
            isVisible:false
        }
    }
    handleClick = () => {
        this.setState({isVisible: !this.state.isVisible})
    }
    render(){
        const {
            children,
            title
        } = this.props
        return(
            <div>
                <span className="menuItem" onClick={this.handleClick}>{title}</span>
                <ReactCSSTransitionGroup component={Fragment} transitionName="menuItem__component__container" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                    {
                        this.state.isVisible?(
                            <div className="menuItem__component__container">
                                {children}
                            </div>
                        ):
                            null
                    }
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}