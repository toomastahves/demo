import { put, call } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import * as actions from '../actions/token';
import * as constants from '../constants/';
import { fetch, delay } from '../utils/fetch';

function* getToken() {
  yield delay(1000);
  try {
    const result = yield call(fetch, { path: '/token', type: 'GET' });
    yield put(actions.getTokenSuccess(result));
  } catch(error) {
    yield put(actions.getTokenFailed(error));
  }
}

export function* watchGetToken() {
  yield* takeLatest(constants.GET_TOKEN_REQUEST, getToken);
}
