import {store} from '../App';
import requestAPI from '../services/requestAPI';

export const signIn = () => (dispatch) => {
  const name = store.getState().signIn.name;
  const pass = store.getState().signIn.pass;
  requestAPI.post('/login', {
      name: name,
      pass: pass
  }, {"Content-Type": "application/json"})
      .then((response) => response.json())
      .then((res) => {
          dispatch({
              type: 'GET_AUTH_SUCCESS',
              name: res.userName,
              rights: res.rights,
              img: res.img
          })
      })
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