import * as actionTypes from './actionTypes';

export const reset = (newPassword) => {
  return {
    type: actionTypes.RESET_PASSWORD,
    newPassword: newPassword
  }
}

export const resetPasswordStart = () => {
  return {
    type: actionTypes.RESET_PASSWORD_START,
  };
};

export const resetPasswordSuccess = (userId, token) => {
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