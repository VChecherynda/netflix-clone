import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import SignIn from './components/SignIn/SignIn';

import classes from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <SignIn />
        </Layout>
      </div>
    );
  }
}

export default App;
