import {
  takeLatest,
  takeEvery,
  fork,
  all,
  call,
  put,
  select,
} from 'redux-saga/effects'
import * as types from '../constant/constant_actions'
import * as VehiclesApi from "../api/searchVehicles";
import * as CameraApi from '../api/camera'
import { searchVehiclesSuccess } from '../actions/action_searchVehicles';
import { changeBoundsMap } from '../actions/action_map';

export function* watchSearchVehicles(){
  yield takeLatest(types.SEARCH_VEHICLES, workerSearchVehicles)
}

function* workerSearchVehicles(action){
  try {
    const response = yield call(VehiclesApi.searchVehicles, action.payload)
    yield put(searchVehiclesSuccess(response.data.data.result))
  } catch (error) {
    console.log(error)
  }
}
