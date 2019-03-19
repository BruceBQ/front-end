import { takeEvery, call, put, } from 'redux-saga/effects'
import { getCrossroadsRequest, getCrossroadRequest, addCrossroadRequest, editCrossroadRequest, deleteCrossroadRequest } from '../api/crossroad'
import { closeModal } from '../actions/action_modal'
import { 
    getCrossroadsFailure, getCrossroadsSuccess, getCrossroad, 
    getCrossroadSuccess, getCrossroadFailure,
    addCrossroadSuccess, addCrossroadFailure,
    editCrossroadSuccess, editCrossroadFailure,
    deleteCrossroadSuccess, deleteCrossroadFailure } from '../actions/action_crossroad'
import * as types from '../constant/constant_actions'

const delay = (ms) => new Promise(res => setTimeout(res, ms))



function* workerGetCrossroads(){
    try {
        const response = yield call(getCrossroadsRequest)
        yield put(getCrossroadsSuccess({crossroads: response.data.data}))
        
    } catch (error) {
        console.log(error)
        yield put( getCrossroadsFailure())
    }
}

export function* watchGetCrossroads(){
    yield takeEvery( types.GET_CROSSROADS, workerGetCrossroads );
}

export function* watchGetCrossroad(){
    yield takeEvery( types.GET_CROSSROAD, workerGetCrossroad)
}

function* workerGetCrossroad(action){
    // console.log(action.id)
    try {
        const response = yield call(getCrossroadRequest, action.id)
        yield put(getCrossroadSuccess(response.data.data))
    } catch (error) {
        
    }
}


function* workerAddCrossroad(action){
    try {
        const response = yield call(addCrossroadRequest, action.crossroad)
        yield put( addCrossroadSuccess({ newCrossroad: response.data.data }))
        yield put( {type: types.CLOSE_MODAL})
        yield delay(100)
        yield put( { type: types.SHOW_NOTIFICATION, message: response.data.message, typeNotification: response.data.type })
    } catch (error) {
        yield put(addCrossroadFailure(error.response.data))
    }
}


export function* watchEditCrossroad(){
    yield takeEvery( types.EDIT_CROSSROAD, workerEditCrossroad)
}

function* workerEditCrossroad(action){
    console.log(action)
    try {
        const response = yield call(editCrossroadRequest, action._id, action.data )
        yield put(editCrossroadSuccess(response.data.data))
        yield put(closeModal())
    } catch (error) {
        yield put(editCrossroadFailure(error.response.data))
        console.log(error)
    }
}
export function* watchAddCrossroad(){
    yield takeEvery( types.ADD_CROSSROAD, workerAddCrossroad)
}

function* workerDeleteCrossroad(action){
    try {
        const response = yield call(deleteCrossroadRequest, action.id)
        yield put(deleteCrossroadSuccess(action.id))
        yield put(closeModal())
        // yield delay(100)
        // yield put( { type: types.SHOW_NOTIFICATION, message: response.data.message, typeNotification: response.data.type })
    } catch (error) {
        yield put(deleteCrossroadFailure())
    }
}

export function* watchDeleteCrossroad(){
    yield takeEvery( types.DELETE_CROSSROAD, workerDeleteCrossroad)
}