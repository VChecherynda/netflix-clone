import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

import * as actions from '../../store/actions/index';

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token != null,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.authLogout()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Toolbar)) ;
