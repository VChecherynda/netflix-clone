import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';

import classes from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          Site for learning purpose
        </Layout>
      </div>
    );
  }
}

export default App;
