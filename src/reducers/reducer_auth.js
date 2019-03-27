import * as types from '../constant/constant_actions'
// import { toast } from 'react-toastify'

const INITIAL_STATE = {
  authenticated: false,
  user: {},
  errors: {},
  fetching: false,
}

const reducer_user = ( state = INITIAL_STATE, action ) => {
  switch (action.type){
    case types.START_FETCHING:
      return Object({}, state, {
        fetching: true
      })
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        authenticated: true,
        user: action.user,
        errors: {},
        fetching: false
      })
    case types.LOGIN_FAILURE:
      return Object.assign({}, state, {
        authenticated: false,
        user: {},
        errors: action.error.data,
        fetching: false
      })
    default:
      return state;
  }
}

export default reducer_user
