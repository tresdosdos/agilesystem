const initialState = {
  signIn: ''
};

export default function getSignIn(state = initialState, action){
    switch(action.type){
        case 'Not Found':{
            return Object.assign({}, state, {signIn: 'This login was not found'})
        }
        case 'Forbidden':{
            return Object.assign({}, state, {signIn: 'Incorrect password'})
        }
        default:{
            return state;
        }
    }
}