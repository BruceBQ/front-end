import { takeLatest, takeEvery, call, put } from 'redux-saga/effects'
import { 
    // getCameras, 
    getCamerasSuccess, 
    // getCameraSuccess, 
    addCameraFailure, 
    addCameraSuccess, 
    checkCameraAuthSuccess, 
    checkCameraAuthFailure, 
    // checkCameraIdentitySuccess, 
    // checkCameraIdentityFailure 
} from '../actions/action_camera'
import * as CameraActions from '../actions/action_camera'
import * as CamerApi from '../api/camera'
import { closeModal } from '../actions/action_modal'
import { } from '../actions/action_camera'
import * as types from '../constant/constant_actions'

// const delay = (ms) => new Promise( res => setTimeout(res, ms))

export function* watchGetCameras(){
    yield takeEvery( types.GET_CAMERAS, workerGetListCameras)
}

function* workerGetListCameras(action){
    try {
        const response = yield call(CamerApi.getCamerasRequest)
        yield put(getCamerasSuccess(response.data.data))
    } catch (error) {
        console.log(error)
    }
}

export function* watchGetCamera(){
    yield takeEvery( types.GET_CAMERA, workerGetCamera)
}

function* workerGetCamera(action){
    try {
        const response = yield call(CamerApi.getCameraRequest, action.id)
        yield put(CameraActions.getCameraSuccess({
            currentCamera: response.data.data, 
            provinces: response.data.provinces,
            districts: response.data.districts, 
            communes: response.data.communes,
        }))
    } catch (error) {
        console.log(error)
    }
}

export function* watchAddCamera(){
    yield takeEvery( types.ADD_CAMERA, workerAddCamera )
}

function* workerAddCamera(action){
    try {
        const response = yield call(CamerApi.addCameraRequest, action.camera)
        yield put(addCameraSuccess(response.data.data.camera))
        yield put(closeModal())
    } catch (error) {
        console.log(error)
        yield put(addCameraFailure(error.response.data.messages))
    }
}

export function* watchEditCamera(){
    yield takeEvery( types.EDIT_CAMERA, workerEditCamera)
}

function* workerEditCamera(action){
    try {
        const response = yield call(CamerApi.editCameraRequest, action.id, action.data)
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}

export function* watchCheckCameraAuth(){
    yield takeEvery(types.CHECK_CAMERA_AUTH, workerCheckCameraAuth)
}

function* workerCheckCameraAuth(action){
    console.log(action.auth)
    try {
        const response = yield call(CamerApi.checkCameraAuthRequest, action.auth)
        yield put(checkCameraAuthSuccess(response.data.data, response.data.provinces))
    } catch (error) {
        yield put(checkCameraAuthFailure(error.response.data.messages))
    }
}

export function* watchCheckCameraLocation() {
    yield takeEvery(types.CHECK_CAMERA_LOCATION, workerCheckCameraLocation)
}

function* workerCheckCameraLocation(action){
    try {
        // const response = yield call(CamerApi.checkCameraLocationRequest, action.location)
        yield call(CamerApi.checkCameraLocationRequest, action.location)
        yield put(CameraActions.checkCameraLocationSuccess())
    } catch (error) {
        console.log(error)
        yield put(CameraActions.checkCameraLocationFailure(error.response.data.messages))
    }
}

export function* watchCheckCameraConfigs(){
    yield takeEvery(types.CHECK_CAMERA_CONFIGS, workerCheckCameraConfigs)
}

function* workerCheckCameraConfigs(action){
    try {
        const response = yield call(CamerApi.checkCameraConfigs, action.configs)
        yield put(CameraActions.addCameraSuccess(response.data.camera))
        yield put(closeModal())
    } catch (error) {
        console.log(error)
        yield put(CameraActions.checkCameraConfigsFailure(error.response.data.messages))
    }
}

export function* watchLoadDistrict(){
    yield takeLatest(types.LOAD_DISTRICT, workerLoadDistrict)
}

function* workerLoadDistrict(action){
    try {
        const response = yield call(CamerApi.loadDistrictRequest, action.province_code)
        yield put(CameraActions.loadDistrictSuccess(response.data.data))
    } catch (error) {
        console.log(error)
    }
}

export function* watchLoadCommune(){
    yield takeLatest(types.LOAD_COMMUNE, workerLoadCommune)
}

function* workerLoadCommune(action){
    console.log(action)
    try {
        const response = yield call(CamerApi.loadCommuneRequest, action.district_code)
        yield put(CameraActions.loadCommuneSuccess(response.data.data))
    } catch (error) {
        console.log(error)
    }
}

export function* watchGetCameraInfo(){
    yield takeLatest(types.GET_CAMERA_INFO, workerGetCameraInfo)
}

function* workerGetCameraInfo(action){
    try {
        const response = yield call(CamerApi.getCameraInfo, action.id)
        yield put(CameraActions.getCameraInfoSuccess(response.data.data))
    } catch (error) {
        console.log(error)
    }
}

export function* watchGetCameraLocations(){
    yield takeLatest(types.GET_CAMERA_LOCATIONS, workerGetCameraLocations)
}

function* workerGetCameraLocations(action){
    try {
        const response = yield call(CamerApi.getCameraLocations, action.id)
        yield put(CameraActions.getCameraLocationsSuccess(response.data.data, response.data.provinces, response.data.districts, response.data.communes))
    } catch (error) {
        console.log(error)
    }
}

export function* watchEditCameraLocations(){
    yield takeLatest(types.EDIT_CAMERA_LOCATIONS, workerEditCameraLocations)
}

function* workerEditCameraLocations({id, data}){
    try {
        const response = yield call(CamerApi.editCameraLocations, id, data)
        yield put(CameraActions.editCameraLocationsSuccess())
    } catch (error) {
        yield put(CameraActions.editCameraLocationsFailure())
    }
}

export function* watchGetCameraConfigs(){
    yield takeLatest(types.GET_CAMERA_CONFIGS, workerGetCameraConfigs)
}

function* workerGetCameraConfigs({id}){
    try {
        const response = yield call(CamerApi.getCameraConfigs, id)
        yield put(CameraActions.getCameraConfigsSuccess(response.data.data))
    } catch (error) {
        console.log(error)
    }
}

export function* watchEditCameraConfigs(){
    yield takeLatest(types.EDIT_CAMERA_CONFIGS, workerEditCameraConfigs)
}

function* workerEditCameraConfigs({id, data}){
    try {
        const response = yield call(CamerApi.editCameraConfigs, id, data)
        yield put(CameraActions.editCameraConfigsSuccess())
    } catch (error) {
        yield put(CameraActions.editCameraConfigsFailure())
    }
}

export function* watchGetProvincesAvailable(){
    yield takeLatest( types.GET_PROVINCES_AVAILABLE, workerGetProvincesAvailable)
}

function* workerGetProvincesAvailable(action){
    try {
        const response = yield call(CamerApi.getProvincesAvailable)
        yield put(CameraActions.getProvincesAvailableSuccess(response.data.data))
    } catch (error) {
        console.log(error)
    }
}

export function* watchGetDistrictsAvailable(){
    yield takeLatest(types.GET_DISTRICTS_AVAILABLE, workerGetDistrictsAvailable)
}

function* workerGetDistrictsAvailable(action){
    try {
        const response = yield call(CamerApi.getDistrictsAvailable, action.province)
        yield put(CameraActions.getDistrictsAvailableSuccess(response.data.data))
    } catch (error) {
        console.log(error)
    }
}

export function* watchConnectCamera(){
    yield takeLatest(types.CONNECT_CAMERA, workerConnectCamera)
}

function* workerConnectCamera(action){
    try {
        const response = yield call(CamerApi.connectCamera, action.payload)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}