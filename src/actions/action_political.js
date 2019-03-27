import * as types from '../constant/constant_actions'

export function getAllProvinces() {
    return {
        type: types.GET_ALL_PROVINCES
    }
}

export function getProvincesSuccess(provinces){
    return {
        type: types.GET_PROVINCES_SUCCESS,
        provinces
    }
}

export function getPoliticalSuccess(districts, communes){
    return {
        type: types.GET_POLITICAL_SUCCESS,
        districts, 
        communes
    }
}

export function reloadPolitical(payload){
    return {
        type: types.RELOAD_POLITICAL,
        payload: payload
    }
}

