import * as types from '../constant/constant_actions'
const INITIAL_STATE = {
    current_infowindow: {

    },
    showInfoWindow: -1,
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
        default:
            return { ...state }
    }
}

export default reducer_map