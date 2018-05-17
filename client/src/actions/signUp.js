import {store} from '../App';
import requestAPI from '../services/requestAPI';

export const signUp = () => (dispatch) => {
    const name = store.getState().signUp.name;
    const pass = store.getState().signUp.pass;
    const rights = store.getState().signUp.rights;
    requestAPI.post('/register', {
        name: name,
        pass: pass,
        rights: rights
    }, {"Content-Type": "application/json"})
        .then((response) => response.json())
        .then((res) => {
            dispatch({
                type: 'GET_FIRST_AUTH_SUCCESS',
                name: res.userName,
                rights: res.rights,
                img: res.img
            })
        })
        .catch((err) => {
            console.log(err.message);
            switch(err.message){
                case 'Conflict':{
                    dispatch({
                        type: 'Conflict'
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