import {store} from '../App';

export const getCredentials = (e) => (dispatch) => {
    const {type} = e.target;
    if (type === 'text')
    {
        dispatch({
            type: 'GET_CREDENTIALS_SUCCESS',
            name: e.target.value,
            pass: store.getState().credentials.pass,
        });
    }
    else if (type === 'password'){
        dispatch({
            type: 'GET_CREDENTIALS_SUCCESS',
            name: store.getState().credentials.name,
            pass: e.target.value
        });
    }
    return;
};