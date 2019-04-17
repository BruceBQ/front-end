import * as types from '../constant/constant_actions'
const INITIAL_STATE = {
  isCurrentPage: false,
  cameras: [
    {
      stream_url: 'http://10.49.46.54:80/livestream/hls/231/index.m3u8',
    },
  ],
  isFetching: false,
  listSize: 9,
  currentPage: 1,
  totalPage: 8,
}

const reducer_followList = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
        listSize: action.listSize,
      })
    case types.GET_FOLLOWLIST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case types.GET_FOLLOWLIST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        cameras: action.camList
      })
    default:
      return state
  }
}

export default reducer_followList
