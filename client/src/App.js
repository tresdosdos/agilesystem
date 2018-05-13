import React, { Component, Fragment } from 'react'
import thunk from 'redux-thunk';
import { Route, Switch } from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux';
import userProfile from './components/userProfile'
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
              <Switch>
                <Route exact path='/'/>
                <Route path='/signIn' component={SignIn}/>
                <Route path='/signUp' component={SignUp}/>
              </Switch>
          </Header>
          <main className="app__main">
            <Switch>
              <Route path='/profile' component={userProfile}/>
            </Switch>
          </main>
      </Fragment>
    );
  }
}

export default App;
