import { takeLatest, takeEvery, fork, all, call, put, select } from 'redux-saga/effects'
import { 
    connectCameraSuccess,
    connectCameraFailure,
    configParamsSucess,
    nextStep,
    configParamsFailure,
    configFunctionsSuccess,
    changeSearchCamParams,
    searchCam,
    searchCamSuccess, 
    searchCamFailure,
    getCamConnectionSuccess, 
    getCamConnectionFailure,
    changeCamConnectionParams
} from '../actions/action_camera'
import * as CameraApi from '../api/camera'
import * as PoliticalAPI from '../api/political'
import { closeModal, showLoadingModal } from '../actions/action_modal'
import { enqueueSnackbar, removeSnackbar } from '../actions/action_snackbar'
import { reloadPolitical } from '../actions/action_political'
import { switchTab } from '../actions/action_manageCam'
import { } from '../actions/action_camera'
import * as types from '../constant/constant_actions'
import _ from 'lodash'

export function* watchConnectCamera(){
    yield takeEvery(types.CONNECT_CAMERA, workerConnectCamera)
}

function* workerConnectCamera(action){
  try {
    yield put(showLoadingModal('Đang kết nối tới camera'))
    const response = yield call(CameraApi.connectCamera, action.payload)
    yield put(connectCameraSuccess(response.data.data))
    yield put(closeModal())
  } catch (error) {
    yield put(enqueueSnackbar({
      message: error.response.data.notify, 
      options: {
        variant: 'error'
      }
    }))
    yield put(closeModal())
    yield put(connectCameraFailure(error.response.data.data))
  } finally{
  }
}

export function* watchConfigParams(){
  yield takeEvery(types.CONFIG_PARAMS, workerConfigParams)
}

function* workerConfigParams(action){
  try {
    yield put(showLoadingModal('Đang cấu hình camera'))
    const response = yield call(CameraApi.configParams, action.payload)
    yield put(configParamsSucess())
    yield put(closeModal())
    
  } catch (error) {
    yield put(enqueueSnackbar({
      message: error.response.data.notify,
      options: {
        variant: 'error'
      }
    }))
    yield put(closeModal())
    yield put(configParamsFailure(error.response.data.data))
  }
}

export function* watchConfigFunctions(){
  yield takeEvery(types.CONFIG_FUNCTIONS, workerConfigFunctions)
}

function* workerConfigFunctions(action){
  try {
    yield put(showLoadingModal('Đang thêm mới camera'))
    const response = yield call(CameraApi.configFunctions, action.payload)
    yield put(enqueueSnackbar({
      message: response.data.notify, 
      options: {
        variant: 'success'
      }
    }))
    yield put(configFunctionsSuccess())
    yield put(closeModal())
  } catch (error) {
    yield put(enqueueSnackbar({
      message: error.response.data.notify, 
      options: {
        variant: 'error'
      }
    }))
    yield put(closeModal())
  }
}

export function* watchClearProvince(){
  yield takeEvery(types.CLEAR_PROVINCE, workerClearProvince)
}

function* workerClearProvince(action){
  yield put(searchCam())
  yield put(reloadPolitical({
    districts: [],
    communes: []
  }))
}

export function* watchClearDistrict(){
  yield takeEvery(types.CLEAR_DISTRICT, workerClearDistrict)
}

function* workerClearDistrict(action){
  yield put(searchCam())
  yield put(reloadPolitical({
    communes: []
  }))
}

export function* watchChangeSearchCamParams(){
  yield takeEvery(types.CHANGE_SEARCH_CAM_PARAMS, workerChangeSearchCamParams)
}

function* workerChangeSearchCamParams(action){
  try {
    if(_.has(action.payload, 'province')){
      yield fork(getDistrictsAvailable, action.payload.province )
    }
    if(_.has(action.payload, 'district')){
      yield fork(getCommunesAvailable, action.payload.district)
    }
    yield put(searchCam())

  } catch (error) {
    
  }
}

function* getDistrictsAvailable(province){
  try {
    const response = yield call(PoliticalAPI.getDistrictsAvailable, province.value)
    yield put(reloadPolitical({
      districts: response.data.data.district_list,
      communes: []
    }))
  } catch (error) {
    
  }
}

function* getCommunesAvailable(district){
  try {
    const district_code = district.map(item => item.value).toString()
    const response =  yield call(PoliticalAPI.getCommunesAvailable, district_code)
    yield put(reloadPolitical({
      communes: response.data.data.commune_list
    }))
  } catch (error) {
    
  }
}

export function* watchSearchCam(){
  yield takeEvery(types.SEARCH_CAMERA, workerSearchCam)
}

export function* workerSearchCam(action){
  try {
    const { cameras } = yield select()
    const response = yield call(CameraApi.searchCamera, cameras.searchCam)
    yield put(searchCamSuccess(response.data.data.camera_list))
    
  } catch (error) {
    yield put(searchCamFailure(error.response.data.data))
  }
}

export function* watchGetCamConnection(){
  yield takeEvery(types.GET_CAM_CONNECTION, workerGetCamConnection)
}

function* workerGetCamConnection(action){
  try {
    const CONFIGS_TAB = 1
    yield put(switchTab(CONFIGS_TAB))
    const response = yield call(CameraApi.getCamConnection, action.id)
    const {connect, political} = response.data.data
    yield put(reloadPolitical({
      provinces: political.province_list,
      districts: political.district_list,
      communes: political.commune_list,
      groups: political.group_list,
    }))
    yield put(getCamConnectionSuccess(connect))
  } catch (error) {
    yield put(getCamConnectionFailure())
    yield put(enqueueSnackbar({
      message: error.response.data.notify, 
      options: {
        variant: 'error'
      }
    }))
  }
}

export function* watchChangeCamConnectionParams(){
  yield(takeEvery(types.CHANGE_CAM_CONNECTION_PARAMS, workerChangeCamConnectionParams))
}

function* workerChangeCamConnectionParams(action){
  try {
    if(!_.isEmpty(action.payload.province)){
      yield put(changeCamConnectionParams({
        district: null,
        commune: null
      }))
      const response = yield call(PoliticalAPI.loadDistricts, action.payload.province.value)
      yield put(reloadPolitical({
        districts: response.data.data.district_list,
        communes: []
      }))
    }
    if(!_.isEmpty(action.payload.district)){
      yield put(changeCamConnectionParams({
        commune: null
      }))
      const response = yield call(PoliticalAPI.loadCommunes, action.payload.district.value)
      yield put(reloadPolitical({
        communes: response.data.data.commune_list
      }))
    }
  } catch (error) {
    console.log(error)
  }
}
