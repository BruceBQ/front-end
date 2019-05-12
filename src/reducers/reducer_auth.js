import * as types from '../constant/constant_actions'
// import { toast } from 'react-toastify'

const INITIAL_STATE = {
  authenticated: false,
  user: {},
  errors: {},
  isFetching: false,
}

const reducer_user = ( state = INITIAL_STATE, action ) => {
  switch (action.type){
    case types.LOGIN:
      return Object.assign({}, state, {
        isFetching: true
      })
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        authenticated: true,
        user: action.user,
        errors: {},
        isFetching: false
      })
    case types.LOGIN_FAILURE:
      return Object.assign({}, state, {
        authenticated: false,
        user: {},
        errors: action.errors,
        isFetching: false
      })
    case types.LOG_OUT:
      return {
        ...state,
        authenticated: false,
        user: {}
      }
    default:
      return state;
  }
}

export default reducer_user
