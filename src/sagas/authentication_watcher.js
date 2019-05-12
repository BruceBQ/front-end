import { takeEvery, takeLatest } from 'redux-saga/effects'
import * as types from '../constant/constant_actions'
import { workerLogin } from './authentication_saga'

export default function* watchUserAuthtication() {
  // login
  yield takeLatest(types.LOGIN, workerLogin)
  // logout
}
