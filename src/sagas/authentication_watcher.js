import { takeEvery, takeLatest } from 'redux-saga/effects'
import * as types from '../constant/constant_actions'
import { workerLogin } from './authentication_saga'

export default function* watchUserAuthtication() {
  yield takeLatest(types.LOGIN, workerLogin)
}