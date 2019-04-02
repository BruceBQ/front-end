import { all, fork } from 'redux-saga/effects'
import { watcherSignIn }  from './saga_authentication'
import { 
  watchConnectCamera,
  watchConfigParams,
  watchConfigFunctions,
  watchChangeSearchCamParams,
  watchClearProvince,
  watchClearDistrict,
  watchSearchCam
} from './saga_camera'
import { 
  watchShowEditModal,
  watchShowDeleteModal, 
  watchCloseModal 
} from './saga_modal'
import { watchGetCameraLocation } from './saga_map'

import {
  watchGetAllProvinces,
  watchChangeCameraParams,
  // watchClearProvince,
  // watchClearDistrict,
} from './saga_political'

import {
  watchGetDataBeforeConnect,
  watchGetDataBeforeSearch,
} from './saga_manageCam'

import {
  
} from './saga_search'

export default function* rootSaga() {
  yield all([
    fork(watcherSignIn),
    //camera
    fork(watchConnectCamera),
    fork(watchConfigParams),
    fork(watchConfigFunctions),
    fork(watchSearchCam),
    //modal
    fork(watchShowEditModal),
    fork(watchCloseModal),
    fork(watchShowDeleteModal),
    //map
    fork(watchGetCameraLocation),
    //political
    fork(watchGetAllProvinces),
    fork(watchChangeCameraParams),
    fork(watchClearProvince),
    fork(watchClearDistrict),
    //manageCam
    fork(watchGetDataBeforeSearch),
    fork(watchGetDataBeforeConnect),
    //search
    fork(watchChangeSearchCamParams),
  ])
}