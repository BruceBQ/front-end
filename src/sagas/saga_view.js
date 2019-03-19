import {  takeEvery, call, put } from 'redux-saga/effects'
import { getSingleViewsRequest, getViewRequest, addViewRequest } from '../api/view'
import { 
    getSingleViewsSuccess, 
    // getSingleViewsFailure, 
    getViewSuccess, 
    // getViewFailure 
} from '../actions/action_view'
// import { closeModal } from '../actions/action_modal'

import * as types from '../constant/constant_actions'

export function* watchGetSingleViews(){
    yield takeEvery( types.GET_SINGLEVIEWS, workerGetSingleViews)
}

function* workerGetSingleViews(){
    try {
        const response = yield call(getSingleViewsRequest)
        yield put(getSingleViewsSuccess({singleViews: response.data.data}))
    } catch (error) {
        
    }
}

export function* watchGetView(){
    yield takeEvery( types.GET_VIEW, workerGetView)
}

function* workerGetView(action){
    try {
        const response = yield call(getViewRequest, action)
        yield put(getViewSuccess({currentView: response.data.data}))
    } catch (error) {
        
    }
}

export function* watchAddView(){
    yield takeEvery( types.ADD_VIEW, workerAddView)
}

function* workerAddView(action){
    try {
        yield call( addViewRequest, action.newView )
        
    }catch{

    }
}