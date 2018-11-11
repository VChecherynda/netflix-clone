import * as actionTypes from './actionTypes';

export const reset = (email, requestType) => {
  return {
    type: actionTypes.RESET_PASSWORD,
    requestType: requestType,
    email: email
  }
}

export const resetPasswordStart = () => {
  return {
    type: actionTypes.RESET_PASSWORD_START,
  };
};

export const resetPasswordSuccess = (token, userId) => {
  return {
    type: actionTypes.RESET_PASSWORD_SUCCESS,
    userId: userId,
    token: token
  };
};

export const resetPasswordFail = error => {
  return {
    type: actionTypes.RESET_PASSWORD_FAIl,
    error: error
  };
};