import React, {Component} from 'react';

import './radioInput.css'

class RadioInput extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedItem: 0
        }
    }
    handleChange = (e, index) => {
        this.setState({
            selectedItem: index
        });
        //this.props.onChange(e);
    };
    render(){
        return this.props.content.map((element, index) => {
            return (
                <label className='sign__up__radio' key={element.toString()}>
                    <input type='radio' name={this.props.group} value={element} key={index} className={this.props.className} checked={this.state.selectedItem === index} onChange={(e) => this.handleChange(e,index)}/>
                    {element}
                </label>
            )
        });
    }
}

export default RadioInput;