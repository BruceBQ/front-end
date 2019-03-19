import { all, fork } from 'redux-saga/effects'
import { watcherSignIn }  from './saga_authentication'
import { 
    watchGetCrossroads,
    watchGetCrossroad, 
    watchAddCrossroad, 
    watchEditCrossroad, 
    watchDeleteCrossroad 
} from './saga_crossroad'
// import { watchDismissNotification } from './saga_ui'
import { watchGetSingleViews, watchGetView, watchAddView } from './saga_view'
import { 
    watchAddCamera, 
    watchGetCamera, 
    watchGetCameras, 
    watchCheckCameraAuth, 
    watchCheckCameraLocation, 
    watchLoadDistrict, 
    watchLoadCommune, 
    watchCheckCameraConfigs, 
    watchEditCamera, 
    watchGetCameraInfo,
    watchGetCameraLocations,
    watchEditCameraLocations,
    watchGetCameraConfigs,
    watchEditCameraConfigs,
    watchGetProvincesAvailable,
    watchGetDistrictsAvailable,
    watchConnectCamera
} from './saga_camera'
// import { watchGetSitemap } from './saga_sitemap'
import { watchShowEditModal,watchShowDeleteModal, watchCloseModal } from './saga_modal'
import { watchGetCameraLocation } from './saga_map'

import {
    watchGetAllProvinces,
    watchChangeCameraParams
} from './saga_political'

import {
    watchCreateGroup
} from './saga_group'

export default function* rootSaga() {
    yield all([
        fork(watcherSignIn),
        // crossroad
        fork(watchGetCrossroads),
        fork(watchGetCrossroad),
        fork(watchAddCrossroad),
        fork(watchEditCrossroad),
        fork(watchDeleteCrossroad),
        // view
        fork(watchGetSingleViews),
        fork(watchGetView),
        fork(watchAddView),
        //camera
        fork(watchConnectCamera),
        fork(watchGetCamera),
        fork(watchGetCameras),
        fork(watchAddCamera),
        fork(watchEditCamera),
        fork(watchCheckCameraAuth),
        fork(watchCheckCameraLocation),
        fork(watchCheckCameraConfigs),
        fork(watchLoadDistrict),
        fork(watchLoadCommune),
        fork(watchGetCameraInfo),
        fork(watchGetCameraLocations),
        fork(watchEditCameraLocations),
        fork(watchGetCameraConfigs),
        fork(watchEditCameraConfigs),
        fork(watchGetProvincesAvailable),
        fork(watchGetDistrictsAvailable),
        //modal
        fork(watchShowEditModal),
        fork(watchCloseModal),
        fork(watchShowDeleteModal),
        //map
        fork(watchGetCameraLocation),
        //political
        fork(watchGetAllProvinces),
        fork(watchChangeCameraParams),
        //group
        fork(watchCreateGroup),
    ])
}