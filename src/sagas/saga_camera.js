import { takeLatest, takeEvery, call, put } from 'redux-saga/effects'
import { 
    connectCameraSuccess,
    connectCameraFailure,
    configParamsSucess,
    nextStep,
    configParamsFailure,
    configFunctionsSuccess
} from '../actions/action_camera'
import * as CamerApi from '../api/camera'
import { closeModal, showLoadingModal } from '../actions/action_modal'
import { enqueueSnackbar, removeSnackbar } from '../actions/action_snackbar'
import { } from '../actions/action_camera'
import * as types from '../constant/constant_actions'

export function* watchConnectCamera(){
    yield takeEvery(types.CONNECT_CAMERA, workerConnectCamera)
}

function* workerConnectCamera(action){
  try {
    yield put(showLoadingModal('Đang kết nối tới camera'))
    const response = yield call(CamerApi.connectCamera, action.payload)
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
    const response = yield call(CamerApi.configParams, action.payload)
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
    const response = yield call(CamerApi.configFunctions, action.payload)
    yield put(enqueueSnackbar({
      message: response.data.notify, 
      options: {
        variant: 'success'
      }
    }))
    yield put(configFunctionsSuccess())
  } catch (error) {
    yield put(enqueueSnackbar({
      message: error.response.data.notify, 
      options: {
        variant: 'error'
      }
    }))
  }
}