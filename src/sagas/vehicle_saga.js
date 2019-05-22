import { call, put } from 'redux-saga/effects'

import * as VehiclesApi from '../api/searchVehicles'
import { searchVehiclesSuccess } from '../actions/action_searchVehicles'

export function* workerSearchVehicles(action) {
  try {
    const res = yield call(VehiclesApi.searchVehicles, action.payload)
    yield put(searchVehiclesSuccess(res.data.data.result))
  } catch (error) {
    console.log(error)
  }
}