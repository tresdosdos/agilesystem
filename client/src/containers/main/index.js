import React, { Component } from 'react';
import ContentCarcass from '../../components/contentCarcass';
import Projects from '../projects';
import { connect } from "react-redux";
import './main.css';

class Main extends Component{
    render(){
        return (
            <main className='main__content'>
                <ContentCarcass header='projects' child={<Projects/>}/>
            </main>
        );
    }
}

export default connect(
    state => ({store: state})
)(Main);