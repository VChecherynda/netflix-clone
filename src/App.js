import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import SignIn from './containers/SignIn/SignIn';
import SignUp from './containers/SignUp/SignUp';
import ResetPassword from './containers/ResetPassword/ResetPassword';
import Films from './containers/Films/Films';


class App extends Component {
  render() {

    let routes = (
      <Switch>
        <Route path='/sign-in' component={SignIn}/>
        <Route path='/sign-up' component={SignUp}/>
        <Route path='/reset-password' component={ResetPassword}/>
        <Redirect to='/' />
      </Switch>
    );

    if(this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path='/sign-in' component={SignIn}/>
          <Route path='/sign-up' component={SignUp}/>
          <Route path='/reset-password' component={ResetPassword}/>
          <Route path='/films' component={Films} />
          <Route path='/' exact component={() => <h1>Main page</h1>} />
        </Switch>
      );
    }

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default App;
