import * as types from '../constant/constant_actions'

export function changeListSize(list_size) {
    return {
        type: types.CHANGE_LIST_SIZE,
        list_size
    }
}

export function activeFollowListPage(){
    return {
        type: types.GOTO_FOLLOWLIST_PAGE
    }
}

export function exitFollowListPage(){
    return {
        type: types.EXIT_FOLLOWLIST_PAGE
    }
}