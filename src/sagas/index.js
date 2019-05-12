import { all, fork } from 'redux-saga/effects'
import watchUserAuthtication  from './authentication_watcher'
import watchCamera from './camera_watcher'
import watchFollowList from './followList_watcher'
import watchPolitical from './political_watcher'
import { 
  // watchConnectCamera,
  // watchConfigParams,
  // watchConfigFunctions,
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
  watchRemoveCamFromFollowList, 
  // watchFetchAllCams,
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
  // watchGetDataBeforeSearch,
} from './saga_manageCam'

import {
  watchSearchVehicles
} from './saga_searchVehicles'



export default function* rootSaga() {
  yield all([
    // auth
    fork(watchUserAuthtication),
    // camera
    fork(watchCamera), 
    // follow list and stream 
    fork(watchFollowList),
    // political
    fork(watchPolitical),
    // fork(watchConnectCamera),
    // fork(watchConfigParams),
    // fork(watchConfigFunctions),
    // fork(watchSearchCam),
    // fork(watchGetCamConnection),
    // fork(watchChangeCamConnectionParams),
    // fork(watchEditCamConnection),
    // fork(watchGetCamParams),
    // fork(watchEditCamParams),
    fork(watchGetCamSnapshot),
    fork(watchAddCamToFollowList),
    fork(watchRemoveCamFromFollowList),
    // fork(watchFetchAllCams),
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
    // fork(watchClearProvince),
    // fork(watchClearDistrict),

    // fork(connectStream),
    //manageCam
    // fork(watchGetDataBeforeSearch),
    fork(watchGetDataBeforeConnect),
    //search
    fork(watchChangeSearchCamParams),

    //search vehicles
    fork(watchSearchVehicles)
  ])
}