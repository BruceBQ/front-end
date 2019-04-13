import { all, fork } from 'redux-saga/effects'
import { watcherSignIn }  from './saga_authentication'
import { 
  watchConnectCamera,
  watchConfigParams,
  watchConfigFunctions,
  watchChangeSearchCamParams,
  watchClearProvince,
  watchClearDistrict,
  watchSearchCam,
  watchGetCamConnection,
  watchChangeCamConnectionParams,
  watchEditCamConnection,
  watchGetCamParams,
  watchEditCamParams,
  watchGetCamSnapshot,
  watchAddCamToFollowList,
  watchRemoveCamFromFollowList
} from './saga_camera'
import { 
  // watchShowEditModal,
  // watchShowDeleteModal, 
  // watchCloseModal 
} from './saga_modal'
import { 
  watchGetCameraLocation,
  watchChangeCamLocation
} from './saga_map'

import {
  watchGetAllProvinces,
  watchChangeCameraParams,
  
  // watchClearProvince,
  // watchClearDistrict,
} from './saga_political'
import {
  connectStream
} from './saga_sitemap'
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
    fork(watchGetCamConnection),
    fork(watchChangeCamConnectionParams),
    fork(watchEditCamConnection),
    fork(watchGetCamParams),
    fork(watchEditCamParams),
    fork(watchGetCamSnapshot),
    fork(watchAddCamToFollowList),
    fork(watchRemoveCamFromFollowList),
    //modal
    // fork(watchShowEditModal),
    // fork(watchCloseModal),
    // fork(watchShowDeleteModal),
    //map
    fork(watchGetCameraLocation),
    fork(watchChangeCamLocation),
    //political
    fork(watchGetAllProvinces),
    fork(watchChangeCameraParams),
    fork(watchClearProvince),
    fork(watchClearDistrict),

    fork(connectStream),
    //manageCam
    fork(watchGetDataBeforeSearch),
    fork(watchGetDataBeforeConnect),
    //search
    fork(watchChangeSearchCamParams),
  ])
}