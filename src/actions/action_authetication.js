import * as types from '../constant/constant_actions'

export function signIn( user ) {
  return {
    type: types.START_FETCHING,
    user: user
  }
}

export function signUp(){
  return {

  }
}

export function logOut(){
  return {

  }
}