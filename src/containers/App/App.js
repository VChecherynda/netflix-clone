import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import App from '../../App';

import * as actions from '../../store/actions/index';

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token != null,
    loading: state.auth.loading,
    error: state.auth.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    isDone: () => { console.log('isDone') }
  }
}

export default withRouter(connect(mapStateToProps, null)(App)) ;
