import { takeLatest, takeEvery, call, put } from 'redux-saga/effects'
import _ from 'lodash'
import { 
    getCameraLocation,
    getCameraPositionSuccess
} from '../actions/action_camera'
import { getPoliticalSuccess } from '../actions/action_political'
import { closeModal, showLoadingModal } from '../actions/action_modal'
import * as MapAPI from '../api/map'
import * as types from '../constant/constant_actions'
export function* watchGetCameraLocation(){
    yield takeLatest(types.GET_CAMERA_LOCATION, workerGetCameraLocation)
}

function* workerGetCameraLocation(action){
    try {
        yield put(showLoadingModal('Đang tải dữ liệu'))
        const response = yield MapAPI.reverseGeocoding(action.payload)
        const { data } = response.data
        yield put(getPoliticalSuccess(data.district_list, data.commune_list))
        yield put(getCameraPositionSuccess(
            data.province_similar, 
            data.district_similar, 
            data.commune_similar
        ))
        yield put(closeModal())
    } catch (error) {
        console.log(error)
    }
}