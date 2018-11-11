import { takeEvery, all } from 'redux-saga/effects';

import {
  authUserSaga
} from './auth';

import {
  resetPasswordCodeSaga,
  resetPasswordConfirmSaga,
} from './resetPassword';

import * as actionTypes from '../actions/actionTypes';

export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_USER, authUserSaga),
    takeEvery(actionTypes.RESET_PASSWORD_CODE, resetPasswordCodeSaga)
  ])
}
