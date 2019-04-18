import * as types from '../constant/constant_actions'
import  actionCreator from '../utils/actionCreator'

export function changeListSize(listSize) {
  return {
    type: types.CHANGE_LIST_SIZE,
    listSize,
  }
}

export function activeFollowListPage() {
  return {
    type: types.GOTO_FOLLOWLIST_PAGE,
  }
}

export function exitFollowListPage() {
  return {
    type: types.EXIT_FOLLOWLIST_PAGE,
  }
}

export const changeFollowListPage = actionCreator(types.CHANGE_FOLLOWLIST_PAGE, 'page')

export const getFollowList = actionCreator(types.GET_FOLLOWLIST)

export const getFollowListSuccess = actionCreator(types.GET_FOLLOWLIST_SUCCESS, 'camList')

export const addCamToFollowList = actionCreator(types.ADD_CAM_TO_FOLLOWLIST, 'camId')

export const addCamToFollowListSuccess = actionCreator(types.ADD_CAM_TO_FOLLOWLIST_SUCCESS, 'camId')

export const addCamToFollowListFailure = actionCreator(types.ADD_CAM_TO_FOLLOWLIST_FAILURE)

export const removeCamFromFollowList = actionCreator(types.REMOVE_CAM_FROM_FOLLOWLIST, 'camId')

export const removeCamFromFollowListSuccess = actionCreator(types.REMOVE_CAM_FROM_FOLLOWLIST_SUCCESS, 'camId')

export const removeCamFromFollowListFailure = actionCreator(types.REMOVE_CAM_FROM_FOLLOWLIST_FAILURE)

