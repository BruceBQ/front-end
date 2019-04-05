import * as types from '../constant/constant_actions'
const LIST_CAM = 0, PARAMS_CONFIGS = 1, FUNCTIONS_CONFIG = 2

const INITIAL_STATE = {
  tabValue: 0,
  rightSiteState: LIST_CAM
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