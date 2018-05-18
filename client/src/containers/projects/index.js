import React, { Component, Fragment } from 'react'
import projectContent from '../../services/projectContent';
import ProjectItem from '../../components/projectItem';
import { connect } from 'react-redux'
import { getProjects, joinProject } from '../../actions/projects'
import privacyAPI from '../../services/privacyAPI'

class Projects extends Component{
  componentDidMount(){
    this.props.getProjects();
  }

  render(){
    const content = this.props.store.projects.data;
    const result = projectContent.makeContent(projectContent.unPack(content));
    const developer = privacyAPI.checkDeveloper(this.props.store.auth.rights);
    const finish = result.map((element, index) => {
      return <ProjectItem projectName={element.name} TL={element.TL} developers={element.developers} descr={element.description} key={index} disabled={developer} join={this.props.joinProject}/>
    });
    return(
      <Fragment>
        {this.props.store.projects.data.length ? (finish) : (<h2>There is no projects</h2>)}
      </Fragment>
    );
  }
}

export default connect(
  state => ({store: state}),
  dispatch => ({
    getProjects: () => {dispatch(getProjects())},
    joinProject: (projectName) => {dispatch(joinProject(projectName))}
  })
)(Projects);