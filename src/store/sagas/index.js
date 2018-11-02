import { takeEvery, all, takeLatest } from 'redux-saga';

import {
  authUserSaga
} from './auth';

export function* wathAuth() {
  yield all([
    takeEvery(acttionTypes.AUTH_USER, authUserSaga)
  ])
}
