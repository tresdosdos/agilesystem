const initialState = {
    name: '',
    pass: '',
    error: ''
};

export default function getSignIn(state = initialState, action){
    switch(action.type){
        case 'GET_CREDENTIALS_SUCCESS':{
            return Object.assign({}, state, {
                name: action.name,
                pass: action.pass
            })
        }
        case 'CLEAR_CREDENTIALS':{
            return Object.assign({}, state, initialState);
        }
        case 'Not Found':{
            return Object.assign({}, state, {error: 'This login was not found'})
        }
        case 'Forbidden':{
            return Object.assign({}, state, {error: 'Incorrect password'})
        }
        case 'Clear Error':{
            return Object.assign({}, state, {error: ''})
        }
        default:{
            return state;
        }
    }
}