import * as types from '../constant/constant_actions'

export function clearCameraErrors(){
  return {
    type: types.CLEAR_CAMERA_ERRORS
  }
}

export function getCameraLocations({id}){
  return {
    type: types.GET_CAMERA_LOCATIONS,
    id
  }
}
export function getCameraLocationsSuccess(locations, provinces, districts, communes){
  return {
    type: types.GET_CAMERA_LOCATIONS_SUCCESS,
    locations,
    provinces,
    districts,
    communes
  }
}

// export function editCameraLocations({id}, data){
//   return {
//     type: types.EDIT_CAMERA_LOCATIONS,
//     id,
//     data
//   }
// }

export function getProvincesAvailable(){
  return {
    type: types.GET_PROVINCES_AVAILABLE
  }
}

export function getProvincesAvailableSuccess(provinces){
  return {
    type: types.GET_PROVINCES_AVAILABLE_SUCCESS,
    provinces
  }
}

export function getDistrictsAvailable(province) {
  return {
    type: types.GET_DISTRICTS_AVAILABLE,
    province
  }
}

export function getDistrictsAvailableSuccess(districts){
  return {
    type: types.GET_DISTRICTS_AVAILABLE_SUCCESS,
    districts
  }
}

export function changeAddCameraParams(payload){
  return {
    type: types.CHANGE_CAMERA_PARAMS,
    payload
  }
}

export function getCameraLocation(payload){
  return {
    type: types.GET_CAMERA_LOCATION,
    payload
  }
}

export function gotoSitemapPage(){
  return {
    type: types.GOTO_SITEMAP_PAGE
  }
}

export function exitSitemapPage(){
  return {
    type: types.EXIT_SITEMAP_PAGE
  }
}

export function getCameraPositionSuccess(province, district, commune){
  return {
    type: types.GET_CAMERA_POSITION_SUCCESS,
    province,
    district,
    commune
  }
}

export function connectCamera(payload){
  return {
    type: types.CONNECT_CAMERA,
    payload
  }
}

export function connectCameraSuccess(payload){
  return {
    type: types.CONNECT_CAMERA_SUCCESS,
    payload
  }
}

export function connectCameraFailure(errors){
  return {
    type: types.CONNECT_CAMERA_FAILURE,
    errors
  }
}

export function configParams(payload){
  return {
    type: types.CONFIG_PARAMS,
    payload
  }
}

export function configParamsSucess(){
  return {
    type: types.CONFIG_PARAMS_SUCCESS
  }
}

export function configParamsFailure(errors){
  return {
    type: types.CONFIG_PARAMS_FAILURE,
    errors
  }
}

export function configFunctions(payload){
  return {
    type: types.CONFIG_FUNCTIONS,
    payload
  }
}

export function configFunctionsSuccess(){
  return {
    type: types.CONFIG_FUNCTIONS_SUCCESS
  }
}

export function configFunctionsFailure(){
  return {
    type: types.CONFIG_FUNCTIONS_FAILURE
  }
}

export function changeSearchCamParams(payload){
  return {
    type: types.CHANGE_SEARCH_CAM_PARAMS,
    payload,
  }
}

export function nextStep(){
  return {
    type: types.NEXT_STEP
  }
}

export function backStep(){
  return {
    type: types.BACK_STEP
  }
}

export function searchCam(){
  return {
    type: types.SEARCH_CAMERA
  }
}

export function searchCamSuccess(payload){
  return {
    type: types.SEARCH_CAMERA_SUCCESS,
    payload
  }
}

export function searchCamFailure(errors){
  return {
    type: types.SEARCH_CAMERA_FAILURE,
    errors
  }
}

export function focusedCam({center, zoom, id}){
  return {
    type: types.FOCUSED_CAM,
    center, 
    zoom, 
    id
  }
}

export function cancelFocusedCam(){
  return {
    type: types.CANCEL_FOCUSED_CAM
  }
}

export function getCamConnection(id){
  return {
    type: types.GET_CAM_CONNECTION,
    id
  }
}

export function getCamConnectionSuccess(connection){
  return {
    type: types.GET_CAM_CONNECTION_SUCCESS,
    connection
  }
}

export function getCamConnectionFailure(){
  return {
    type: types.GET_CAM_CONNECTION_FAILURE
  }
}

export function changeCamConnectionParams(payload){
  return {
    type: types.CHANGE_CAM_CONNECTION_PARAMS,
    payload
  }
}

export function editCamConnection(id, payload){
  return {
    type: types.EDIT_CAM_CONNECTION,
    id,
    payload,
  }
}

export function editCamConnectionSuccess(){
  return {
    type: types.EDIT_CAM_CONNECTION_SUCCESS
  }
}

export function editCamConnectionFailure(){
  return {
    type: types.EDIT_CAM_CONNECTION_FAILURE
  }
}