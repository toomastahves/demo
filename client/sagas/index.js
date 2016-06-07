import { fork } from 'redux-saga/effects';
import { watchGetToken } from './token';

export default function* root() {
  yield fork(watchGetToken);
}
