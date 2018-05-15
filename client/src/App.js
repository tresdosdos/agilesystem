import React, { Component, Fragment } from 'react'
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import './App.css';
import Header from './containers/header'

export const store = createStore(reducers, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));

class App extends Component {
  render() {
    return (
      <Fragment>
          <Header/>
      </Fragment>
    );
  }
}

export default App;