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
          switch(err.message){
              case 'Not Found':{
                  dispatch({
                     type: 'Not Found'
                  });
                  break;
              }
              case 'Forbidden':{
                  dispatch({
                      type: 'Forbidden'
                  });
                  break;
              }
              default:{
                  dispatch({
                      type: err.message
                  });
                  break;
              }
          }
      })
};