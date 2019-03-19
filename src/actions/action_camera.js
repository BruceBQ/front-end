import * as types from '../constant/constant_actions'

export function getCameras(crossroad){
    return {
        type: types.GET_CAMERAS,
        // crossroad
    }
}

export function getCamerasSuccess(cameras){
    return {
        type: types.GET_CAMERAS_SUCCESS,
        cameras: cameras
    }
}

export function getCamerasFailure(){
    return {
        type: types.GET_CAMERAS_FAILURE
    }
}

export function getCamera({id}){
    return {
        type: types.GET_CAMERA,
        id
    }
}

export function getCameraSuccess({currentCamera, provinces, districts, communes}){
    return {
        type: types.GET_CAMERA_SUCCESS,
        currentCamera,
        provinces,
        districts,
        communes,
    }
}

export function getCameraFailure(){
    return {
        type: types.GET_CAMERA_FAILURE
    }
}

export function addCamera(camera){
    return {
        type: types.ADD_CAMERA,
        camera: camera
    }
}

export function addCameraSuccess(camera){
    return {
        type: types.ADD_CAMERA_SUCCESS,
        camera
    }
}

export function addCameraFailure(errors){
    return {
        type: types.ADD_CAMERA_FAILURE,
        errors: errors
    }
}

export function editCamera({id}, data){
    return {
        type: types.EDIT_CAMERA,
        id,
        data
    }
}

export function clearCameraErrors(){
    return {
        type: types.CLEAR_CAMERA_ERRORS
    }
}

export function checkCameraAuth(auth){
    return {
        type: types.CHECK_CAMERA_AUTH,
        auth
    }
}

export function  checkCameraAuthSuccess(configs, provinces) {
    return {
        type: types.CHECK_CAMERA_AUTH_SUCCESS,
        configs,
        provinces,
    }
}

export function checkCameraAuthFailure(errors){
    return {
        type: types.CHECK_CAMERA_AUTH_FAILURE,
        errors
    }
}

export function checkCameraLocation(location){
    return {
        type: types.CHECK_CAMERA_LOCATION,
        location
    }
}

export function checkCameraLocationSuccess(params) {
    return {
        type: types.CHECK_CAMERA_LOCATION_SUCCESS,
    }
}

export function checkCameraLocationFailure(errors){
    return {
        type: types.CHECK_CAMERA_LOCATION_FAILURE,
        errors
    }
}

export function checkCameraIdentity(identity){
    return{
        type: types.CHECK_CAMERA_IDENTITY,
        identity
    }
}

export function checkCameraIdentitySuccess(){
    return {
        type: types.CHECK_CAMERA_IDENTITY_SUCCESS
    }
}

export function checkCameraIdentityFailure(errors){
    return {
        type: types.CHECK_CAMERA_IDENTITY_FAILURE,
        errors
    }
}

export function checkCameraConfigs(configs){
    return {
        type: types.CHECK_CAMERA_CONFIGS,
        configs
    }
}

export function checkCameraConfigsFailure(errors){
    return {
        type: types.CHECK_CAMERA_CONFIGS_FAILURE,
        errors
    }
}

export function loadDistrict(province_code){
    return {
        type: types.LOAD_DISTRICT,
        province_code
    }
}

export function loadDistrictSuccess(districts){
    return {
        type: types.LOAD_DISTRICT_SUCCESS,
        districts
    }
}

export function loadDistrictFailure(error){
    return { 
        type: types.LOAD_DISTRICT_FAILURE
    }
}

export function loadCommune(district_code){
    return {
        type: types.LOAD_COMMUNE,
        district_code
    }
}

export function loadCommuneSuccess(communes){
    return {
        type: types.LOAD_COMMUNE_SUCCESS,
        communes
    }
}

export function loadCommuneFailure(error){
    return { 
        type: types.LOAD_COMMUNE_FAILURE
    }
}

export function backStep(){
    return {
        type: types.BACK_STEP
    }
}

export function getCameraInfo({id}){
    return {
        type: types.GET_CAMERA_INFO,
        id
    }
}

export function getCameraInfoSuccess(info){
    return {
        type: types.GET_CAMERA_INFO_SUCCESS,
        info
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

export function editCameraLocations({id}, data){
    return {
        type: types.EDIT_CAMERA_LOCATIONS,
        id,
        data
    }
}
export function editCameraLocationsSuccess(){
    return {
        type: types.EDIT_CAMERA_LOCATIONS_SUCCESS
    }
}

export function editCameraLocationsFailure(){
    return {
        type: types.EDIT_CAMERA_LOCATIONS_FAILURE
    }
}

export function getCameraConfigs({id}){
    return {
        type: types.GET_CAMERA_CONFIGS,
        id
    }
}

export function getCameraConfigsSuccess(configs){
    return {
        type: types.GET_CAMERA_CONFIGS_SUCCESS,
        configs
    }
}

export function editCameraConfigs({id}, data){
    return {
        type: types.EDIT_CAMERA_CONFIGS,
        id,
        data
    }
}

export function editCameraConfigsSuccess(){
    return {
        type: types.EDIT_CAMERA_CONFIGS_SUCCESS
    }
}

export function editCameraConfigsFailure(){
    return {
        type: types.EDIT_CAMERA_CONFIGS_FAILURE
    }
}

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

export function searchCamera({province, district, commune, hamlet, street, crossroad, position, search_input}){
    return {
        type: types.SEARCH_CAMERA,
        province,
        district,
        commune,
        hamlet,
        street,
        crossroad,
        position,
        search_input
    }
}

export function changeCameraParams(payload){
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

export function activeAddCam(){
    return {
        type: types.ACTIVE_ADD_CAMERA
    }
}

export function disabledAddCam(){
    return {
        type: types.DISABLE_ADD_CAMERA
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

export function connectCameraFailure(payload){
    return {
        type: types.CONNECT_CAMERA_FAILURE,
        payload
    }
}
