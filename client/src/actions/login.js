import {store} from '../App';
import requestAPI from '../services/requestAPI';

export const logIn = () => (dispatch) => {
  const name = store.getState().credentials.name;
  const pass = store.getState().credentials.pass;
  requestAPI.post('/login', {
      name: name,
      pass: pass
  }, {"Content-Type": "application/json"})
      .then((response) => response.json())
      .then((res) => console.log(res))
      .catch((err) => {
          if (err.status === 404){
              console.log('There is no user with login ' + name);
          }
          else if (err.status === 403){
              console.log('Login and password doesnt match');
          }
          else console.log(err);
      })
};