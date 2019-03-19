import * as types from '../constant/constant_actions'


export function showNotification(){
    return {
        type: types.SHOW_NOTIFICATION
    }
}

export function dismissNotification(){
    return{
        type: types.DISMISS_NOTIFICATION
    }
}

export function toggleFilter() {
    return {
        type: types.TOGGLE_CAMERA_FILTER
    }
}

export function toggleCameraFilter(){
    return {
        type: types.TOGGLE_CAMERA_FILTER
    }
}

export function toggleSettingsMenu(){
    return {
        type: types.TOGGLE_SETTINGS_MENU
    }
}