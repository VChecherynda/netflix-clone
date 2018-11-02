import * as actionTypes from './actionTypes';

export const auth = (email,) => {
  return {
    type: actionTypes.AUTH_SIGNIN_START
  };
};

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SIGNIN_SUCCESS,
    userId: userId,
    token: token
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_SIGNIN_SUCCESS,
    error: error
  };
};