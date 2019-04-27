import { takeEvery, takeLatest, put } from 'redux-saga'
import * as types from '../constant/constant_actions'

import {
  workerFetchAllCams, 
  workerInitSearchCam, 
  workerSearchCam,
  workerChangeSearchCamParams,
} from './camera_saga'

export default function* watchCamera(){
  //fetch all cameras
  yield takeEvery(types.FETCH_ALL_CAMS, workerFetchAllCams)
  // init search cam
  yield takeEvery(types.INIT_SEARCH_CAM, workerInitSearchCam)
  // search cam
  yield takeEvery(types.SEARCH_CAMERA, workerSearchCam)
  // change search cam params
  yield takeEvery(types.CHANGE_SEARCH_CAM_PARAMS, workerChangeSearchCamParams)
}