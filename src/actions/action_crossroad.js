import * as types from '../constant/constant_actions'

export function getCrossroads(){
    return{
        type: types.GET_CROSSROADS,
    }
}
export function getCrossroadsSuccess({crossroads}){
    return {
        type: types.GET_CROSSROADS_SUCCESS,
        crossroads
    }
}

export function getCrossroadsFailure(error){
    return {
        type: types.GET_CROSSROADS_FAILURE,
        error: error,
    }
}

export function getCrossroad({id}){
    return {
        type: types.GET_CROSSROAD,
        id
    }
}

export function getCrossroadSuccess(data){
    return {
        type: types.GET_CROSSROAD_SUCCESS,
        currentCrossroad: data
    }
}

export function getCrossroadFailure(){
    return {
        type: types.GET_CROSSROAD_FAILURE
    }
}

export function addCrossroad(crossroad){
    return {
        type: types.ADD_CROSSROAD,
        crossroad: crossroad,
    }
}

export function addCrossroadSuccess({newCrossroad}){
    return {
        type: types.ADD_CROSSROAD_SUCCESS,
        newCrossroad: newCrossroad,
    }
}

export function addCrossroadFailure(error){
    return {
        type: types.ADD_CROSSROAD_FAILURE,
        error: error
    }
}

export function editCrossroad(_id, data){
    return {
        type: types.EDIT_CROSSROAD,
        _id,
        data
    }
}

export function editCrossroadSuccess(data){
    return {
        type: types.EDIT_CROSSROAD_SUCCESS,
        data: data
    }
}

export function editCrossroadFailure(error){
    return {
        type: types.EDIT_CROSSROAD_FAILURE,
        error
    }
}

export function deleteCrossroad(id){
    return {
        type: types.DELETE_CROSSROAD,
        id
    }
}

export function deleteCrossroadSuccess(id){
    return {
        type: types.DELETE_CROSSROAD_SUCCESS,
        id
    }
}

export function deleteCrossroadFailure(){
    return {
        type: types.DELETE_CROSSROAD_FAILURE
    }
}

export function clearCrossroadErrors(){
    return {
        type: types.CLEAR_CROSSROAD_ERROR
    }
}