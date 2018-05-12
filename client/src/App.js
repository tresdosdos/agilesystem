import React, { Component } from 'react';
import {connect} from 'react-redux';
import thunk from 'redux-thunk';
import {HashRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import './App.css';

import SignIn from './containers/signIn';

export const store = createStore(reducers, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));

class App extends Component {
  render() {
    return (
      <SignIn/>
    );
  }
}

export default App;
