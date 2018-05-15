import React, { Component, Fragment } from 'react'
import './slideMenu.css'
import FlipMove from 'react-flip-move' 
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/fontawesome-free-solid/index'

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
                <FontAwesomeIcon className="fa-2x slideMenu__icon" icon={faBars} onClick={this.handleClick}>Menu</FontAwesomeIcon>
                {
                    this.state.isVisible?
                    (
                        <FlipMove
                            appearAnimation="accordionHorizontal"
                            enterAnimation="accordionHorizontal"
                            leaveAnimation="accordionHorizontal"
                        >
                        <div className="slideMenu">
                            <span onClick={this.handleClick} className="slideMenu__close"/>
                            {this.props.children}
                        </div>
                        </FlipMove>
                    ):
                    null
                }
            </Fragment>
        )
    }
}