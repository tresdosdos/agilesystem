import React, { Component, Fragment } from 'react'
import thunk from 'redux-thunk';
import { Route, Switch } from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import './App.css';

import SignIn from './containers/signIn';
import SignUp from './containers/signUp';
import Header from './containers/header/index'

export const store = createStore(reducers, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));

class App extends Component {
  render() {
    return (
      <Fragment>
          <Header>
            
          </Header>
      </Fragment>
    );
  }
}

export default App;
