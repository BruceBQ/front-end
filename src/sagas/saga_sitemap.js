import { eventChannel, END } from 'redux-saga'
import { takeLatest, takeEvery, apply, call, put, take, fork, all, select, cancelled } from 'redux-saga/effects'
import _ from 'lodash'
import ReconnectingWebSocket from 'reconnecting-websocket'
import { WS_URL } from '../constant/constant_endpoint'
import { enqueueSnackbar, removeSnackbar } from '../actions/action_snackbar'
import { closeModal } from '../actions/action_modal'
import * as types from '../constant/constant_actions'
import { getStreamingUrlSuccess } from '../actions/action_streaming'


const delay = (ms) => new Promise(res => setTimeout(res, ms))

function createWebSocketConnection() {
  return new Promise((resolve, reject) => {
    // window.WebSocket = window.WebSocket || window.MozWebSocket
    const options = {
      connectionTimeout: 1000,
      maxRetries: 10
    }
    // const socket = new ReconnectingWebSocket(WS_URL, [], options)
    const socket = new WebSocket(WS_URL)
    socket.onopen =  () => {
      resolve(socket)
    }
    socket.onerror = (event) => {
      console.log("WebSocket error: ", )
      reject(event)
    }
    socket.onclose = (event) => {
      console.log("WebSocket is closed now.")
      
      reject(event)
    }

    socket.onerror = (event) => {
      console.error("WebSocket error observed:", event)
      socket.close()
      reject(event)
    }
  })
}

function createSocketChannel(socket) {
  return eventChannel(emit => {
    socket.onmessage = (event) => {
      emit(JSON.parse(event.data))
    }
    socket.onclose = () => {
      emit(END)
    }
    socket.onerror = () => {
      emit(END)
    }
    const unsubscribe = () => {
      socket.onmessage = null
    }
    return unsubscribe
  })
}

function* listenForSocketMessages(){
  let socket, socketChannel
  try {
    socket = yield call(createWebSocketConnection)
    console.log(yield cancelled())
    yield takeEvery(types.CLOSE_PREV_STREAMING, function*(action){
      yield apply(socket, socket.send, [
        JSON.stringify({
          type: 'stop_streaming',
          data: {
            id: action.id
          }
        })
      ])
    })
    yield takeEvery(types.GET_CAM_SNAPSHOT, function*(action){
      yield apply(socket, socket.send, [ 
        JSON.stringify({
          type: 'start_streaming',
          data: {
            id: action.id  
          }
        })
      ])
    })
    // yield takeEvery(types.GET_STREAMING_URL, function*(action) {
    //   yield apply(socket, socket.send, [ 
    //     JSON.stringify({
    //       type: 'start_streaming',
    //       data: {
    //         id: action.id  
    //       }
    //     })
    //   ])
    // })
    yield takeEvery(types.CLOSE_INFO_WINDOW, function*(action) {
      yield apply(socket, socket.send, [
        JSON.stringify({
          type: 'stop_streaming',
          data: {
            id: action.id
          }
        })
      ])
    })
    socketChannel = yield call(createSocketChannel, socket)

    while(true){
      const payload = yield take(socketChannel)

      if(payload.type === 'start_streaming'){
        // console.log(a)
        yield put(getStreamingUrlSuccess(payload.data))
      }
      
    }
  } catch (error) {
    console.log(error)
    yield put(
      enqueueSnackbar({
        message: "Kết nối với server thất bại!",
        options: {
          variant: 'error',
        },
      }),
    )
  } finally {
    
  }

}

export function* connectStream(){
  yield fork(listenForSocketMessages)
}