import * as types from '../constant/constant_actions'
const INITIAL_STATE = {
  isCurrentPage: false,
  cameras: [],
  camsNotFollowed: [],
  isFetching: false,
  isFetchingCamsNotFollowed: false,
  listSize: 4,
  currentPage: 1,
  totalPage: 1,
}
function updateCam(cams, action) {
  return cams.map((cam, index) => {
    if (action.camId.includes(cam.id)) {
      return {
        ...cam,
        is_in_followlist: !cam.is_in_followlist,
      }
    }
    return cam
  })
}

function removeCam(cams, action) {
  return cams.filter(cam => cam.id === action.camId[0])
}

const reducer_followList = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CHANGE_LIST_SIZE:
      return {
        ...state,
        listSize: action.listSize,
        currentPage: 1,
        totalPage: Math.ceil(state.cameras.length / action.listSize),
      }

    case types.CHANGE_FOLLOWLIST_PAGE:
      return {
        ...state,
        currentPage: action.page,
      }

    case types.GET_FOLLOWLIST:
      return {
        ...state,
        isFetching: true,
      }

    case types.GET_FOLLOWLIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        cameras: action.camList,
        totalPage: Math.ceil(action.camList.length / state.listSize),
      }
    // case types.REMOVE_CAM_FROM_FOLLOWLIST_SUCCESS:
    //   return Object.assign({}, state, {
    //     cameras: removeCam(state.cameras, action),
    //     // streamingUrl: updateStreamUrl(state.streamingUrl, action),
    //   })
    case types.FETCH_CAMS_NOT_FOLLOWED:
      return {
        ...state,
        isFetchingCamsNotFollowed: true,
      }
    case types.FETCH_CAMS_NOT_FOLLOWED_SUCCESS:
      return {
        ...state,
        isFetchingCamsNotFollowed: false,
        camsNotFollowed: action.payload,
      }
    case types.FETCH_CAMS_NOT_FOLLOWED_FAILURE:
      return {
        ...state,
        isFetchingCamsNotFollowed: false,
        camsNotFollowed: []
      }
    default:
      return state
  }
}

export default reducer_followList
