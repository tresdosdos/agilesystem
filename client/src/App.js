import React, { Component, Fragment } from 'react'
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import './App.css';
import Header from './containers/header'
import Main from './containers/main'

export const store = createStore(reducers, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));

class App extends Component {
  render() {
    return (
      <Fragment>
          <Header/>
          <Main/>
      </Fragment>
    );
  }
}

export default App;