const initialState = {
    name: '',
    rights: '',
    img: './standart_avatar.png'
};

export default function getAuth(state = initialState, action) {
    switch (action.type){
        case 'GET_FIRST_AUTH_SUCCESS':{
            return Object.assign({}, state, {
                name: action.name,
                rights: action.rights,
            })
        }
        case 'GET_AUTH_SUCCESS':{
            return Object.assign({}, state, {
                name: action.name,
                rights: action.rights,
                img: action.img
            })
        }
        case 'CHANGE_AVATAR':{
            return Object.assign({}, state, {img: action.img})
        }
        case 'LOGOUT':{
            return Object.assign({}, state, {name: '', rights: '', img: ''})
        }
        default:{
            return state;
        }
    }
}