import React from 'react';
import { connect } from 'react-redux';

import SignIn from '../../view/SignIn/SignIn';

import * as actions from '../../store/actions/index';

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token != null,
    authRedirectPath: state.auth.authRedirectPath,
    loading: state.auth.loading,
    error: state.auth.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
