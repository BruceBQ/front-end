import * as types from '../constant/constant_actions'

export function showInfoWindow({id, center}) {
  return {
    type: types.SHOW_INFO_WINDOW,
    id,
    center,
  }
}

export function closeInfoWindow(id){
  return {
    type: types.CLOSE_INFO_WINDOW,
    id
  }
}

export function changeBoundsMap({center, zoom}){
  return {
    type: types.CHANGE_BOUNDS_MAP,
    center, 
    zoom
  }
}

export function toggleAddCamMap(){
  return {
    type: types.TOGGLE_ADD_CAM_MAP
  }
}

export function toggleEditCamMap(){
  return {
    type: types.TOGGLE_EDIT_CAM_MAP
  }
}

