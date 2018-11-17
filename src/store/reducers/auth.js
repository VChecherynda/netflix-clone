import * as actionTypes from '../actions/actionTypes';

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: '/'
};

const authStart = ( state, action ) => {
  return {...state,
    error: null,
    loading: true,
  };
};

const authSuccess = (state, action) => {
  return  {...state,
    token: action.token,
    userId: action.userId,
    error: null,
    loading: false,
    authRedirectPath: 'films'
   };
};

const authFail = (state, error) => {
  return  {...state,
    error: error,
   };
};

const authLogout = (state, action) => {
  return {...state,
    token: null,
    userId: null,
    authRedirectPath: '/'
  };
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.AUTH_START: return authStart(state, action);
    case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
    case actionTypes.AUTH_FAIL: return authFail(state, action);
    case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
    default:
      return state;
  }
};

export default reducer;