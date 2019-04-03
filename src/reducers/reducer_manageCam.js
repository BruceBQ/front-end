import * as types from '../constant/constant_actions'

const INITIAL_STATE = {
  tabValue: 0
}

const reducer_manageCam = (state =INITIAL_STATE, action) => {
  switch(action.type){
    case types.SWITCH_TAB:
      return Object.assign({}, state, {
        tabValue: action.value
      })
    default:
      return state
  }
}

export default reducer_manageCam