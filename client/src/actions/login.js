import {store} from '../App';

export const getCredentials = (e) => (dispatch) => {
    const {type} = e.target;
    if (type === 'text')
    {
        dispatch({
            type: 'GET_CREDENTIALS_SUCCESS',
            name: e.target.value,
            pass: store.getState().signIn.pass,
        });
    }
    else if (type === 'password'){
        dispatch({
            type: 'GET_CREDENTIALS_SUCCESS',
            name: store.getState().signIn.name,
            pass: e.target.value
        });
    }
    dispatch({
       type: 'Clear Error'
    });
    return;
};

export const logout = () => (dispatch) => {
    dispatch({
        type: 'LOGOUT'
    });
    dispatch({
      type: 'CLEAR_CREDENTIALS'
    });
};