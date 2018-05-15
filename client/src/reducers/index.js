import {combineReducers} from 'redux';
import signIn from './signIn';
import signUp from './signUp';
import auth from './auth';

export default combineReducers({
    signIn: signIn,
    signUp: signUp,
    auth: auth
});