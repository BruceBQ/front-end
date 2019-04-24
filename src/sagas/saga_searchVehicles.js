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
import { searchVehiclesSuccess } from '../actions/action_searchVehicles';

export function* watchSearchVehicles(){
  yield takeLatest(types.SEARCH_VEHICLES, workerSearchVehicles)
}

function* workerSearchVehicles(action){
  try {
    const response = yield call(VehiclesApi.searchVehicles, action.payload)
    console.log(response.data)
    yield put(searchVehiclesSuccess(response.data.data.result))
  } catch (error) {
    console.log(error)
  }
}