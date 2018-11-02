import * as actionTypes from './actionTypes';

export const signInStart = () => {
  return {
      type: actionTypes.SIGNIN_START
  };
};

export const signInSuccess = (token, userId) => {
  return {
      type: actionTypes.SIGNIN_SUCCESS,
      userId: userId,
      token: token
  };
};

export const signInFail = error => {
  return {
      type: actionTypes.SIGNIN_SUCCESS,
      error: error
  };
};

export const signUpStart = () => {
  return {
      type: actionTypes.SIGNUP_START
  };
};

export const signUpSuccess = (token, userId) => {
  return {
      type: actionTypes.SIGNUP_SUCCESS,
      userId: userId,
      token: token
  };
};

export const signUpFail = error => {
  return {
      type: actionTypes.SIGNUP_FAIL,
      error: error
  };
};