import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import SignIn from './containers/SignIn/SignIn';
import SignUp from './containers/SignUp/SignUp';

class App extends Component {
  render() {

    let routes = (
      <Switch>
        <Route path='/sign-in' component={SignIn}/>
        <Route path='/sign-up' component={SignUp}/>
        <Route path='/' exact component={() => <h1>Main page</h1>} />
      </Switch>
    );

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default withRouter(App)  ;
