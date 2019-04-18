import * as types from '../constant/constant_actions'
const INITIAL_STATE = {
  isCurrentPage: false,
  cameras: [],
  isFetching: false,
  listSize: 4,
  currentPage: 1,
  totalPage: 1,
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
        currentPage: 1,
        totalPage: Math.ceil(state.cameras.length/action.listSize)
      })
    case types.CHANGE_FOLLOWLIST_PAGE: 
      return Object.assign({}, state, {
        currentPage: action.page
      })
    case types.GET_FOLLOWLIST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case types.GET_FOLLOWLIST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        cameras: action.camList,
        totalPage: Math.ceil(action.camList.length/state.listSize)
      })

    default:
      return state
  }
}

export default reducer_followList
