import React, { Component } from 'react';
import {connect} from 'react-redux';
import thunk from 'redux-thunk';
import {HashRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import './App.css';

import LoginInputs from './containers/loginInputs';

export const store = createStore(reducers, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));

class App extends Component {
  render() {
    return (
      <LoginInputs/>
    );
  }
}

export default App;
