import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions';

export function* resetPasswordCodeSaga(action) {
  yield put(actions.resetPasswordStart());

  const resetData = {
    requestType: action.requestType,
    email: action.email,
  }

  let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/getOobConfirmationCode?key=AIzaSyDHSxxpi35OZMVjeusn4vkRIf4L3tAoHpA';

  try {
    const response = yield axios.post(url, resetData);
    yield put(
      actions.resetPasswordSuccess(response.data.kind, response.data.email)
    );
  } catch(error) {
    yield put(actions.resetPasswordFail(error.response.data.error));
  }
}

export function* resetPasswordConfirmSaga(action) {
  yield put(actions.resetPasswordStart());

  const resetData = {
    requestType: action.requestType,
    email: action.email,
  }

  let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/getOobConfirmationCode?key=AIzaSyDHSxxpi35OZMVjeusn4vkRIf4L3tAoHpA';

  try {
    const response = yield axios.post(url, resetData);
    yield put(
      actions.resetPasswordSuccess(response.data.kind, response.data.email)
    );
  } catch(error) {
    yield put(actions.resetPasswordFail(error.response.data.error));
  }
}