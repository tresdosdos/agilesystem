const initialState = {
    name: '',
    pass: ''
};

export default function getCredentials(state = initialState, action) {
    switch (action.type){
        case 'GET_CREDENTIALS_SUCCESS':{
            return Object.assign({}, state, {
                name: action.name,
                pass: action.pass
            })
        }
        default:{
            return state;
        }
    }
}