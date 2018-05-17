import {store} from '../App';
import requestAPI from '../services/requestAPI';

export const getProjects = () => (dispatch) =>{
  requestAPI.get('/projects')
    .then((response) => response.json())
    .then((res) => {
      dispatch({
        type: 'GET_PROJECTS_SUCCESS',
        data: res
      });
    })
}

export const getProjectCredentials = (e) => (dispatch) =>{
  if (e.target.id === 'projectName'){
    dispatch({
      type: 'GET_PROJECT_CREDENTIALS',
      projectName: e.target.value,
      projectDescr: store.getState().projects.projectDescr
    })
  }
  else if (e.target.id === 'projectDescr'){
    dispatch({
      type: 'GET_PROJECT_CREDENTIALS',
      projectName: store.getState().projects.projectName,
      projectDescr: e.target.value
    })
  }
  else return;
}

export const addProject = () => (dispatch) =>{
  requestAPI.post('/addProject', {
    projectName: store.getState().projects.projectName,
    projectDescr: store.getState().projects.projectDescr
  }, {"Content-Type": "application/json"})
    .then((response) => response.json())
    .then((res) => {
      dispatch({
        type: 'GET_PROJECTS_SUCCESS',
        data: res
      });
    });
}

export const joinProject = (projectName) => (dispatch) =>{
  console.log(projectName);
  requestAPI.post('/joinProject', {
    projectName: projectName,
    userName: store.getState().auth.name,
    rights: store.getState().auth.rights
  }, {"Content-Type": "application/json"})
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      dispatch({
        type: 'GET_PROJECTS_SUCCESS',
        data: res
      });
    })
    .catch((err) => {
      if (err.message === 'Forbidden'){
        dispatch({
          type: 'JOIN_IS_EXIST'
        })
      }
    })
}