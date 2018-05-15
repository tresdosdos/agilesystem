import React, { Component, Fragment } from 'react'
import projectContent from '../../services/projectContent';
import ProjectItem from '../../components/projectItem';
import { connect } from 'react-redux'
import { getProjects } from '../../actions/projects'

class Projects extends Component{
  constructor (props){
    super(props);

  }
  handleClick = (e) =>{
    console.log(e.target.id);
  };
  componentDidMount(){
    this.props.getProjects();
  }
  render(){
    const content = [
      {
        name: 'huy',
        description: 'azaza olo im voditel nlo',
        TL: [{name: 'strelok', img: './standart_avatar.png'}],
        developers: [{name: 'strelok', img: './standart_avatar.png'}]
      },
      {
        name: 'pidr',
        description: 'a ti loh',
        TL: [{name: 'yeban', img: './standart_avatar.png'}],
        developers: [{name: 'loh', img: './standart_avatar.png'}]
      }
    ]
    const result = projectContent.makeContent(projectContent.unPack(content));
    const finish = result.map((element, index) => {
      return <ProjectItem name={element.name} TL={element.TL} developers={element.developers} descr={element.description} key={element.name.toString()} />
    });
    return(
      <Fragment>
        {finish}
      </Fragment>
    );
  }
}

export default connect(
  state => ({store: state}),
  dispatch => ({
    getProjects: () => {dispatch(getProjects())}
  })
)(Projects);