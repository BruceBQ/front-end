import * as types from '../constant/constant_actions'
const INITIAL_STATE = {
    isCurrentPage: false,
    cameras: [{
        stream_url: 'http://10.49.46.54:80/livestream/hls/231/index.m3u8'
    },],
    list_size: "9",
    current_page: 1,
    total_page: 8,
}

const reducer_followList = (state= INITIAL_STATE, action) => {
    switch(action.type){
        case types.GOTO_FOLLOWLIST_PAGE:
            return Object.assign({}, state, {
                isCurrentPage: true,
            })
        case types.EXIT_FOLLOWLIST_PAGE: 
            return Object.assign({}, state, {
                isCurrentPage: false,
            })
        case types.CHANGE_LIST_SIZE:
            return Object.assign({}, state, {
                list_size: action.list_size
            })
        default:
            return state
    }
}

export default reducer_followList