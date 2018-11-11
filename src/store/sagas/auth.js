import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions';

export function* authUserSaga(action) {
  yield put(actions.authStart());

  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true
  }

  let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDHSxxpi35OZMVjeusn4vkRIf4L3tAoHpA';

  if (!action.isSignup) {
    url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDHSxxpi35OZMVjeusn4vkRIf4L3tAoHpA';
  }

  try {
    const response = yield axios.post(url, authData);

    console.log('[response]', response);

    yield localStorage.setItem("token", response.data.idToken);
    yield localStorage.setItem("userId", response.data.localId);
    yield put(
      actions.authSuccess(response.data.idToken, response.data.localId)
    );
  } catch(error) {
    yield put(actions.authFail(error.response.data.error));
  }
}

export function* resetPasswordSaga(action) {
  yield put(actions.resetPasswordStart());

  const idToken = yield localStorage.getItem('token');

  console.log(action.newPassword ,idToken)

  const resetPasswordData = {
    idToken: idToken,
    password: action.newPassword,
    returnSecureToken: true
  }

  let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/setAccountInfo?key=AIzaSyDHSxxpi35OZMVjeusn4vkRIf4L3tAoHpA';

  try {
    const response = yield axios.post(url, resetPasswordData);

    console.log('[response]', response);

    yield localStorage.setItem("token", response.data.idToken);
    yield localStorage.setItem("userId", response.data.localId);
    yield put(
      actions.authSuccess(response.data.idToken, response.data.localId)
    );
  } catch(error) {
    console.log('[error]', error.response.data.error);

    yield put(actions.authFail(error.response.data.error));
  }
}