import {store} from '../App';
import requestAPI from '../services/requestAPI';

export const getProjects = () => (dispatch) =>{
  requestAPI.get('/projects')
    .then((response) => response.json())
    .then((res) => console.log(res))
}