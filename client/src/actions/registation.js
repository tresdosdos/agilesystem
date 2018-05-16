import {store} from '../App';

export const getRegistration = (e) => (dispatch) => {
    const {type} = e.target;
    if (type === 'text')
    {
        dispatch({
            type: 'GET_REGISTRATION_SUCCESS',
            name: e.target.value,
            pass: store.getState().signUp.pass,
            rights: store.getState().signUp.rights
        });
    }
    else if (type === 'password'){
        dispatch({
            type: 'GET_REGISTRATION_SUCCESS',
            name: store.getState().signUp.name,
            pass: e.target.value,
            rights: store.getState().signUp.rights
        });
    }
    else if (type === 'select-one'){
        dispatch({
            type: 'GET_REGISTRATION_SUCCESS',
            name: store.getState().signUp.name,
            pass: store.getState().signUp.pass,
            rights: e.target.value
        });
    }
    dispatch({
        type: 'Clear Error'
    });
    return;
};