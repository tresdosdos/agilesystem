const initialState = {
    name: '',
    pass: '',
    rights: 'Developer',
    error: ''
};

export default function getRegistration(state = initialState, action) {
    switch (action.type){
        case 'GET_REGISTRATION_SUCCESS':{
            return Object.assign({}, state, {
                name: action.name,
                pass: action.pass,
                rights: action.rights
            })
        }
        case 'Conflict':{
            return Object.assign({}, state, {error: 'This user name is already exist'})
        }
        case 'Clear Error':{
            return Object.assign({}, state, {error: ''})
        }
        default:{
            return state;
        }
    }
}