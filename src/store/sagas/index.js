import { takeEvery, all } from 'redux-saga/effects';

import {
  authUserSaga
} from './auth';

import * as acttionTypes from '../actions/actionTypes';

export function* watchAuth() {
  yield all([
    takeEvery(acttionTypes.AUTH_USER, authUserSaga)
  ])
}
