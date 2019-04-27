import { takeEvery, put, call, all, select, fork } from 'redux-saga/effects'
import _ from 'lodash'

import { enqueueSnackbar } from '../actions/action_snackbar'
import {
  fetchAllCamsSuccess,
  searchCam,
  searchCamSuccess,
  searchCamFailure,
} from '../actions/action_camera'
import { reloadPolitical } from '../actions/action_political'
import * as GroupApi from '../api/group'
import * as PoliticalApi from '../api/political'
import * as CameraApi from '../api/camera'

// fetch all cameras
export function* workerFetchAllCams() {
  try {
    const response = yield call(CameraApi.fetchAllCams)
    yield put(fetchAllCamsSuccess(response.data.data.camera_list))
  } catch (error) {
    yield put(
      enqueueSnackbar({
        message: 'Lấy thông tin camera thất bại',
        options: {
          variant: 'error',
        },
      }),
    )
  }
}

// init search cam
export function* workerInitSearchCam(action) {
  try {
    yield put(searchCam())
    const [provinces, groups] = yield all([
      call(PoliticalApi.fetchProvincesAvailable),
      call(PoliticalApi.fetchGroupsAvailable),
    ])
    yield put(
      reloadPolitical({
        provinces: provinces.data.data.province_list,
        districts: [],
        communes: [],
        groups: groups.data.data.group_list,
      }),
    )
  } catch (error) {
    yield put(
      enqueueSnackbar({
        message: 'LẤY THÔNG TIN ĐỂ TÌM KIẾM CAMERA THẤT BẠI',
        options: {
          variant: 'error',
        },
      }),
    )
  }
}

// search cam
export function* workerSearchCam(action) {
  try {
    const { cameras } = yield select()
    const response = yield call(CameraApi.searchCamera, cameras.searchCam)
    yield put(searchCamSuccess(response.data.data.camera_list))
  } catch (error) {
    yield put(searchCamFailure())
    yield put(
      enqueueSnackbar({
        message: 'LỌC CAMERA THẤT BẠI',
        options: {
          variant: 'error',
        },
      }),
    )
  }
}

// change search cam params
export function* workerChangeSearchCamParams(action) {
  try {
    if(_.has(action.payload, 'province')){
      yield fork(fetchDistricts, action.payload.province)
    }
  } catch (error) {
    
  }
}

function* fetchDistricts(province){
  try {
    const response = yield call(PoliticalApi.fetchDistrictsAvailable, province.value)
    yield put(reloadPolitical({
      districts: response.data.data.district_list,
      communes: []
    }))
  } catch (error) {
    
  }
}