import * as types from '../constant/constant_actions'
const INITIAL_STATE = {
    notification: {
        show: false, message: '', typeNotification: ''
    },
    cameraFilterSidebar: true,
    settingsMenu: false,
}
const reducer_ui = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case types.SHOW_NOTIFICATION:
            return { ...state, notification: { show: true, message: action.message, typeNotification: action.typeNotification }}
        case types.DISMISS_NOTIFICATION:
            return { ...state, notification: {show: false, message: '', typeNotificaion: '' }}
        case types.TOGGLE_CAMERA_FILTER:
            return Object.assign({}, state, {
                cameraFilterSidebar: !state.cameraFilterSidebar
            })
        case types.TOGGLE_SETTINGS_MENU:
            return Object.assign({}, state, {
                settingsMenu: !state.settingsMenu
            })
        default: 
            return {...state}
    }
}

export default reducer_ui