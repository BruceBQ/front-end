import * as types from '../constant/constant_actions'

const INITIAL_STATE = {
    current_infowindow: {

    },
    defaultCenter: {
      lat: 16.036308499726402,
      lng: 108.20592484212307
    },
    center: {
      lat: 16.036308499726402,
      lng: 108.20592484212307
    },
    zoom: 13,
    defaultZoom: 13,
    fitBoundsMap: false,
    showInfoWindow: -1,
    focusedCam: -1,
}

const reducer_map = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case types.SHOW_INFO_WINDOW:
      return Object.assign({}, state, {
        showInfoWindow: action.id
      })
    case types.CLOSE_INFO_WINDOW:
      return Object.assign({}, state, {
        showInfoWindow: INITIAL_STATE.showInfoWindow
      })
    //change bounds
    case types.CHANGE_BOUNDS_MAP:
      return Object.assign({},state, {
        center: action.center,
        zoom: action.zoom,
      })
    // focus camera
    case types.FOCUSED_CAM:
      return Object.assign({}, state, {
        center: action.center,
        zoom: action.zoom,
        focusedCam: action.id
      })
    case types.CANCEL_FOCUSED_CAM:
      return Object.assign({}, state, {
        focusedCam: -1
      })
    case types.SEARCH_CAMERA_SUCCESS:
      return Object.assign({}, state, {
        fitBoundsMap: true
      })
    default:
      return { ...state }
  }
}

export default reducer_map