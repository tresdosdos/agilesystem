const initialState = {
    name: '',
    rights: 'Developer'
};

export default function getAuth(state = initialState, action) {
    switch (action.type){
        case 'GET_AUTH_SUCCESS':{
            return Object.assign({}, state, {
                name: action.name,
                rights: action.rights
            })
        }
        default:{
            return state;
        }
    }
}