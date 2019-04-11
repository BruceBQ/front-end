import { eventChannel, END } from 'redux-saga'
import { takeLatest, takeEvery, apply, call, put, take, fork, all } from 'redux-saga/effects'
import _ from 'lodash'
import { WS_URL } from '../constant/constant_endpoint'
import { closeModal } from '../actions/action_modal'
import * as types from '../constant/constant_actions'
import { getStreamingUrlSuccess } from '../actions/action_streaming'


const delay = (ms) => new Promise(res => setTimeout(res, ms))

function createWebSocketConnection() {
  return new Promise((resolve, reject) => {
    console.log(typeof JSON.stringify({
       
        type: 'streaming',
        data: {
          id:'5ca6ac69a45e1a5e8b1f49fb'  
        }
      
    }))
    // window.WebSocket = window.WebSocket || window.MozWebSocket
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
    yield takeEvery(types.SHOW_INFO_WINDOW, function*(action) {
      yield apply(socket, socket.send, [ 
        JSON.stringify({
          type: 'streaming',
          data: {
            id: action.id  
          }
        })
      ])
    })

    socketChannel = yield call(createSocketChannel, socket)

    while(true){
      const payload = yield take(socketChannel)

      if(payload.type === 'streaming'){
        // console.log(a)
        yield put(getStreamingUrlSuccess(payload.data))
      }
      
    }
  } catch (error) {
    console.log(error)
  }

}

export function* connectStream(){
  yield fork(listenForSocketMessages)
}