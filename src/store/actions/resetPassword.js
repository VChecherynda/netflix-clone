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

export const resetPasswordSuccess = (oobCode, email) => {
  return {
    type: actionTypes.RESET_PASSWORD_SUCCESS,
    oobCode: oobCode,
    email: email,
  };
};

export const resetPasswordFail = error => {
  return {
    type: actionTypes.RESET_PASSWORD_FAIl,
    error: error
  };
};