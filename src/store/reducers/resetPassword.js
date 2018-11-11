import * as actionTypes from '../actions/actionTypes';

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: '/'
}

const resetPasswordStart = (state, action) => {
  return {...state,
    error: null,
    loading: true,
  };
}

const resetPasswordSuccess = (state, action) => {
  console.log('[action]', action)
  return  {...state,
    token: action.idToken,
    userId: action.userId,
    error: null,
    loading: false
   };
};

const resetPasswordFail = (state, error) => {
  return  {...state,
    error: error,
    loading: false
   };
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.RESET_PASSWORD_START: return resetPasswordStart(state, action);
    case actionTypes.RESET_PASSWORD_SUCCESS: return resetPasswordSuccess(state, action);
    case actionTypes.RESET_PASSWORD_FAIl: return resetPasswordFail(state, action);
    default:
      return state;
  }
};

export default reducer;