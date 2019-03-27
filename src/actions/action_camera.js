import * as types from '../constant/constant_actions'

export function clearCameraErrors(){
    return {
        type: types.CLEAR_CAMERA_ERRORS
    }
}

export function getCameraLocations({id}){
    return {
        type: types.GET_CAMERA_LOCATIONS,
        id
    }
}
export function getCameraLocationsSuccess(locations, provinces, districts, communes){
    return {
        type: types.GET_CAMERA_LOCATIONS_SUCCESS,
        locations,
        provinces,
        districts,
        communes
    }
}

export function editCameraLocations({id}, data){
    return {
        type: types.EDIT_CAMERA_LOCATIONS,
        id,
        data
    }
}

export function getProvincesAvailable(){
    return {
        type: types.GET_PROVINCES_AVAILABLE
    }
}

export function getProvincesAvailableSuccess(provinces){
    return {
        type: types.GET_PROVINCES_AVAILABLE_SUCCESS,
        provinces
    }
}

export function getDistrictsAvailable(province) {
    return {
        type: types.GET_DISTRICTS_AVAILABLE,
        province
    }
}

export function getDistrictsAvailableSuccess(districts){
    return {
        type: types.GET_DISTRICTS_AVAILABLE_SUCCESS,
        districts
    }
}

export function searchCamera({province, district, commune, hamlet, street, crossroad, position, search_input}){
    return {
        type: types.SEARCH_CAMERA,
        province,
        district,
        commune,
        hamlet,
        street,
        crossroad,
        position,
        search_input
    }
}

export function changeAddCameraParams(payload){
    return {
        type: types.CHANGE_CAMERA_PARAMS,
        payload
    }
}

export function getCameraLocation(payload){
    return {
        type: types.GET_CAMERA_LOCATION,
        payload
    }
}

export function gotoSitemapPage(){
    return {
        type: types.GOTO_SITEMAP_PAGE
    }
}

export function exitSitemapPage(){
    return {
        type: types.EXIT_SITEMAP_PAGE
    }
}

export function getCameraPositionSuccess(province, district, commune){
    return {
        type: types.GET_CAMERA_POSITION_SUCCESS,
        province,
        district,
        commune
    }
}

export function connectCamera(payload){
    return {
        type: types.CONNECT_CAMERA,
        payload
    }
}

export function connectCameraSuccess(payload){
    return {
        type: types.CONNECT_CAMERA_SUCCESS,
        payload
    }
}

export function connectCameraFailure(errors){
    return {
        type: types.CONNECT_CAMERA_FAILURE,
        errors
    }
}

export function configParams(payload){
  return {
    type: types.CONFIG_PARAMS,
    payload
  }
}

export function configParamsSucess(){
  return {
    type: types.CONFIG_PARAMS_SUCCESS
  }
}

export function configParamsFailure(errors){
  return {
    type: types.CONFIG_PARAMS_FAILURE,
    errors
  }
}

export function configFunctions(payload){
  return {
    type: types.CONFIG_FUNCTIONS,
    payload
  }
}

export function configFunctionsSuccess(){
  return {
    type: types.CONFIG_FUNCTIONS_SUCCESS
  }
}

export function configFunctionsFailure(){
  return {
    type: types.CONFIG_FUNCTIONS_FAILURE
  }
}

export function nextStep(){
  return {
    type: types.NEXT_STEP
  }
}

export function backStep(){
  return {
    type: types.BACK_STEP
  }
}