import * as types from '../constant/constant_actions'
import  actionCreator from '../utils/actionCreator'

export function clearCameraErrors() {
  return {
    type: types.CLEAR_CAMERA_ERRORS,
  }
}

export function getCameraLocations({ id }) {
  return {
    type: types.GET_CAMERA_LOCATIONS,
    id,
  }
}
export function getCameraLocationsSuccess(
  locations,
  provinces,
  districts,
  communes,
) {
  return {
    type: types.GET_CAMERA_LOCATIONS_SUCCESS,
    locations,
    provinces,
    districts,
    communes,
  }
}

// export function editCameraLocations({id}, data){
//   return {
//     type: types.EDIT_CAMERA_LOCATIONS,
//     id,
//     data
//   }
// }

export function getProvincesAvailable() {
  return {
    type: types.GET_PROVINCES_AVAILABLE,
  }
}

export function getProvincesAvailableSuccess(provinces) {
  return {
    type: types.GET_PROVINCES_AVAILABLE_SUCCESS,
    provinces,
  }
}

export function getDistrictsAvailable(province) {
  return {
    type: types.GET_DISTRICTS_AVAILABLE,
    province,
  }
}

export function getDistrictsAvailableSuccess(districts) {
  return {
    type: types.GET_DISTRICTS_AVAILABLE_SUCCESS,
    districts,
  }
}

export function changeAddCameraParams(payload) {
  return {
    type: types.CHANGE_CAMERA_PARAMS,
    payload,
  }
}
// get cam location via GoogleMapApi
export function getCameraLocation(payload) {
  return {
    type: types.GET_CAMERA_LOCATION,
    payload,
  }
}

export function changeCamLocation(payload) {
  return {
    type: types.CHANGE_CAM_LOCATION,
    payload,
  }
}

export function gotoSitemapPage() {
  return {
    type: types.GOTO_SITEMAP_PAGE,
  }
}

export function exitSitemapPage() {
  return {
    type: types.EXIT_SITEMAP_PAGE,
  }
}

export function getCameraPositionSuccess(province, district, commune) {
  return {
    type: types.GET_CAMERA_POSITION_SUCCESS,
    province,
    district,
    commune,
  }
}

export function connectCamera(payload) {
  return {
    type: types.CONNECT_CAMERA,
    payload,
  }
}

export function connectCameraSuccess(payload) {
  return {
    type: types.CONNECT_CAMERA_SUCCESS,
    payload,
  }
}

export function connectCameraFailure(errors) {
  return {
    type: types.CONNECT_CAMERA_FAILURE,
    errors,
  }
}

export function configParams(payload) {
  return {
    type: types.CONFIG_PARAMS,
    payload,
  }
}

export function configParamsSucess() {
  return {
    type: types.CONFIG_PARAMS_SUCCESS,
  }
}

export function configParamsFailure(errors) {
  return {
    type: types.CONFIG_PARAMS_FAILURE,
    errors,
  }
}

export function configFunctions(payload) {
  return {
    type: types.CONFIG_FUNCTIONS,
    payload,
  }
}

export function configFunctionsSuccess() {
  return {
    type: types.CONFIG_FUNCTIONS_SUCCESS,
  }
}

export function configFunctionsFailure() {
  return {
    type: types.CONFIG_FUNCTIONS_FAILURE,
  }
}

export function changeSearchCamParams(payload) {
  return {
    type: types.CHANGE_SEARCH_CAM_PARAMS,
    payload,
  }
}

export function nextStep() {
  return {
    type: types.NEXT_STEP,
  }
}

export function backStep() {
  return {
    type: types.BACK_STEP,
  }
}


// export function searchCamFailure(errors) {
//   return {
//     type: types.SEARCH_CAMERA_FAILURE,
//     errors,
//   }
// }

export function focusOnCam({ center, zoom, id }) {
  return {
    type: types.FOCUS_ON_CAM,
    center,
    zoom,
    id,
  }
}
//

export function cancelFocusedCam() {
  return {
    type: types.CANCEL_FOCUSED_CAM,
  }
}

export function configCam({ id, center, zoom, name, ip }) {
  return {
    type: types.CONFIG_CAM,
    name,
    ip,
    center,
    zoom,
    id,
  }
}
export function getCamConnection(id) {
  return {
    type: types.GET_CAM_CONNECTION,
    id,
  }
}

export function getCamConnectionSuccess(connection) {
  return {
    type: types.GET_CAM_CONNECTION_SUCCESS,
    connection,
  }
}

export function getCamConnectionFailure() {
  return {
    type: types.GET_CAM_CONNECTION_FAILURE,
  }
}

export function changeCamConnectionParams(payload) {
  return {
    type: types.CHANGE_CAM_CONNECTION_PARAMS,
    payload,
  }
}
export function changeCamPolitical(payload) {
  return {
    type: types.CHANGE_CAM_POLITICAL,
    payload,
  }
}
export function editCamConnection(id, payload) {
  return {
    type: types.EDIT_CAM_CONNECTION,
    id,
    payload,
  }
}

export function editCamConnectionSuccess() {
  return {
    type: types.EDIT_CAM_CONNECTION_SUCCESS,
  }
}

export function editCamConnectionFailure(errors) {
  return {
    type: types.EDIT_CAM_CONNECTION_FAILURE,
    errors
  }
}

export function getCamParams(id) {
  return {
    type: types.GET_CAM_PARAMS,
    id
  }
}

export function getCamParamsSuccess(params) {
  return {
    type: types.GET_CAM_PARAMS_SUCCESS,
    params
  }
}

export function getCamParamsFailure() {
  return {
    type: types.GET_CAM_PARAMS_FAILURE
  }
}

export function editCamParams(id, payload) {
  return {
    type: types.EDIT_CAM_PARAMS,
    id,
    payload
  }
}

export function editCamParamsSuccess() {
  return {
    type: types.EDIT_CAM_PARAMS_SUCCESS
  }
}

export function editCamParamsFailure() {
  return {
    type: types.EDIT_CAM_PARAMS_FAILURE
  }
}

//snapshot
export function getCamSnapshot(id){
  return {
    type: types.GET_CAM_SNAPSHOT,
    id
  }
}

export function getCamSnapshotSuccess(snapshotImageUrl){
  return {
    type: types.GET_CAM_SNAPSHOT_SUCCESS,
    snapshotImageUrl
  }
}

// fetch all cameras
export const fetchAllCams = actionCreator(types.FETCH_ALL_CAMS)
export const fetchAllCamsSuccess = actionCreator(types.FETCH_ALL_CAMS_SUCCESS, 'cams')
//search camera
export const initSearchCam = actionCreator(types.INIT_SEARCH_CAM)
export const searchCam = actionCreator(types.SEARCH_CAMERA)
export const searchCamSuccess = actionCreator(types.SEARCH_CAMERA_SUCCESS, 'cams')
export const searchCamFailure = actionCreator(types.SEARCH_CAMERA_FAILURE)


