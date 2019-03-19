import * as types from '../constant/constant_actions'

export function showInfoWindow(id) {
    return {
        type: types.SHOW_INFO_WINDOW,
        id
    }
}

export function closeInfoWindow(){
    return {
        type: types.CLOSE_INFO_WINDOW
    }
}