import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import thunk from 'redux-thunk';
import { Route, Switch } from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import './App.css';

import SignIn from './containers/signIn';
import Header from './components/Header/Header'

export const store = createStore(reducers, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <main>
          <Switch>
            <Route exact path='/'/>
            <Route path='/login' component={SignIn}/>
          </Switch>
        </main>
      </Fragment>
    );
  }
}

export default App;
