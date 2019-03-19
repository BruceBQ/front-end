import { takeLatest, takeEvery, call, put, fork, all } from 'redux-saga/effects'
import { getSitemapRequest } from '../api/sitemap'
import { getCrossroadsSuccess, getCrossroadsFailure } from '../actions/action_crossroad'
import { closeModal } from '../actions/action_modal'
import * as types from '../constant/constant_actions'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* watchGetSitemap(){
    yield takeEvery( types.GET_SITEMAP, workerGetSitemap)
}

function* workerGetSitemap(){
    try {
        const response = yield call(getSitemapRequest)
        const crossroads = response.data.data.crossroads
        yield put(getCrossroadsSuccess({crossroads: crossroads}))
    } catch (error) {
        
    }
}