import {combineReducers} from 'redux';
import credentials from './credentials'
import signIn from './signIn';

export default combineReducers({
    credentials: credentials,
    errors: signIn
});