import * as types from '../constant/constant_actions'

export function getStreamingUrlSuccess(streamingUrl){
  return {
    type: types.GET_STREAMING_URL_SUCCESS,
    streamingUrl
  }
}