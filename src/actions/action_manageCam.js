import * as types from '../constant/constant_actions'

//get provinces and group before connect
export function getDataBeforeConnect(){
  return {
    type: types.GET_DATA_BEFORE_CONNECT
  }
}

//get provinces and group before search
export function getDataBeforeSearch(){
  return {
    type: types.GET_DATA_BEFORE_SEARCH
  }
}

