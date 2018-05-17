const initialState = {
  data: [],
  projectName: '',
  projectDescr: '',
  error: ''
};

export default function getProjects(state = initialState, action) {
  switch (action.type){
    case 'GET_PROJECTS_SUCCESS':{
      return Object.assign({}, state, {data: action.data})
    }
    case 'GET_PROJECT_CREDENTIALS':{
      return Object.assign({}, state, {
        projectName: action.projectName,
        projectDescr: action.projectDescr
      })
    }
    case 'JOIN_IS_EXIST':{
      return Object.assign({}, state, {error: 'You already in this project'})
    }
    default:{
      return state;
    }
  }
}