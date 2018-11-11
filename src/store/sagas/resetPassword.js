import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions';

export function* authUserSaga(action) {
  yield put(actions.resetPasswordStart());

  const resetData = {
    requestType: action.requestType,
    email: action.email,
  }

  let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/getOobConfirmationCode?key=AIzaSyDHSxxpi35OZMVjeusn4vkRIf4L3tAoHpA';

  try {
    const response = yield axios.post(url, resetData);
    yield localStorage.setItem("oobCode", response.data.kind);
    yield localStorage.setItem("email", response.data.email);
    yield put(
      actions.authSuccess(response.data.oobCode, response.data.email)
    );
  } catch(error) {
    yield put(actions.authFail(error.response.data.error));
  }
}