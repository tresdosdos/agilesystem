import {store} from '../App';
import requestAPI from '../services/requestAPI';

export const logIn = () => (dispatch) => {
  const name = store.getState().credentials.name;
  const pass = store.getState().credentials.pass;
  requestAPI.post('/login', {
      name: name,
      pass: pass
  }, {"Content-Type": "application/json"}).then((response) => {
      console.log(response);
      response.json();
  })
        .then((res) => console.log(res))
};