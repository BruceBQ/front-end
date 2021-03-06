import * as types from '../constant/constant_actions'
import  actionCreator from '../utils/actionCreator'

// export function activeFollowListPage() {
//   return {
//     type: types.GOTO_FOLLOWLIST_PAGE,
//   }
// }

// export function exitFollowListPage() {
//   return {
//     type: types.EXIT_FOLLOWLIST_PAGE,
//   }
// }

// start follow list
export const startFollowList = actionCreator(types.START_FOLLOWLIST)

// change follow list page
export const changeFollowListPage = actionCreator(types.CHANGE_FOLLOWLIST_PAGE, 'page')

// change follow list size
export const changeListSize = actionCreator(types.CHANGE_LIST_SIZE, 'listSize')

// get follow list
export const getFollowList = actionCreator(types.GET_FOLLOWLIST)
export const getFollowListSuccess = actionCreator(types.GET_FOLLOWLIST_SUCCESS, 'camList')

// add camera to follow list
export const addCamToFollowList = actionCreator(types.ADD_CAM_TO_FOLLOWLIST, 'camId')
export const addCamToFollowListSuccess = actionCreator(types.ADD_CAM_TO_FOLLOWLIST_SUCCESS, 'camId')
export const addCamToFollowListFailure = actionCreator(types.ADD_CAM_TO_FOLLOWLIST_FAILURE)

//remove camera from follow list
export const removeCamFromFollowList = actionCreator(types.REMOVE_CAM_FROM_FOLLOWLIST, 'camId')
export const removeCamFromFollowListSuccess = actionCreator(types.REMOVE_CAM_FROM_FOLLOWLIST_SUCCESS, 'camId')
export const removeCamFromFollowListFailure = actionCreator(types.REMOVE_CAM_FROM_FOLLOWLIST_FAILURE)

// fetch cam not followed
export const fetchCamNotFollowed = actionCreator(types.FETCH_CAMS_NOT_FOLLOWED)
export const fetchCamNotFollowedSuccess = actionCreator(types.FETCH_CAMS_NOT_FOLLOWED_SUCCESS, 'payload')
export const fetchCamNotFollowedFailure = actionCreator(types.FETCH_CAMS_NOT_FOLLOWED_FAILURE, 'payload')

export const cancelWebsocket = actionCreator(types.CANCEL_WEBSOCKET)