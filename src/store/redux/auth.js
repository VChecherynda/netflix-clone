import * as actionTypes from '../actions/actionTypes';

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: '/'
};

const authStart = ( state, action ) => {
  return {...state, error: null, loading: true };
};


const authSuccess = (state, action) => {
  return  {...state, 
      token: action.idToken,
      userId: action.userId,
      error: null,
      loading: false
   };
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
      case actionTypes.AUTH_START: return authStart(state, action);
      case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
      default:
          return state;
  }
};

export default reducer;