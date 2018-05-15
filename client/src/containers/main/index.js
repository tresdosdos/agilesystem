import React, {Component} from 'react';
import ContentCarcass from '../../components/contentCarcass';
import {connect} from "react-redux";
import './main.css';

class Main extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const content = [
          {
              name: 'huy',
              TL: [{name: 'strelok', img: './standart_avatar.png'}],
              developers: [{name: 'strelok', img: './standart_avatar.png'}]
          }
          ]
        return (
            <main className='main__content'>
                <ContentCarcass header='projects' content={content}/>
            </main>
        );
    }
}

export default connect(
    state => ({store: state})
)(Main);