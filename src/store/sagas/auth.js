import { delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions';

export function* authUserSaga(action) {
  yield put(actions.authStart);

  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true
  }

  let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDHSxxpi35OZMVjeusn4vkRIf4L3tAoHpA';
  try {
    const response = yield axios.post(url, authData);
    yield put(actions.authSuccess(response));
  } catch(error) {
    yield put(actions.authFail(error.response.data.error));
  }
}