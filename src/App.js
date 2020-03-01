import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { Auth, Home } from 'pages'

function App({ isAuth }) {
  return (
    <div className="wrapper">
      <Switch>
        <Route exact path={['/signin', '/signup', '/signup/check']} component={Auth} />
        <Route path='/' render={() => (isAuth ? <Home /> : <Redirect to="/signup" />)} />
      </Switch>
    </div>
  );
}

export default connect(({ user }) => ({ isAuth: user.isAuth }))(App);
