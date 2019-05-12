import { takeEvery, takeLatest, put } from 'redux-saga/effects'
import * as types from '../constant/constant_actions'
import {
  workerStartFollowList
} from './followList_saga'

export default function* watchFollowList(){
  yield takeEvery(types.START_FOLLOWLIST, workerStartFollowList)
}