import { eventChannel, END, delay } from 'redux-saga'
import {
  takeEvery,
  apply,
  put,
  call,
  fork,
  take,
  cancel,
  cancelled,
} from 'redux-saga/effects'
import _ from 'lodash'

import * as types from '../constant/constant_actions'
import { WS_URL } from '../constant/constant_endpoint'
import { enqueueSnackbar, removeSnackbar } from '../actions/action_snackbar'
import { loadUserData } from '../utils/localStorage'
import { getStreamingUrlSuccess } from '../actions/action_streaming'
import {
  getFollowListSuccess,
  startFollowList,
  cancelWebsocket,
} from '../actions/action_followList'
import { fetchCamStreamingUrlSuccess } from '../actions/action_camera'

function createWebSocketConnection() {
  return new Promise((resolve, reject) => {
    const socket = new WebSocket(WS_URL)
    socket.onopen = () => {
      console.log('Websocket openning')
      resolve(socket)
    }
    socket.onclose = event => {
      console.log('WebSocket is closed now.')
      reject(event)
    }
    socket.onmessage = event => {
      console.log(event)
    }
    // socket.onerror = event => {
    //   console.error('WebSocket error observed:', event)
    //   socket.close()
    //   reject(event)
    // }
  })
}

function createSocketChannel(socket) {
  return eventChannel(emit => {
    socket.onmessage = event => {
      emit(JSON.parse(event.data))
    }
    socket.onclose = () => {
      emit('close_websocket')
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

export function* workerStartFollowList() {
  const socketTask = yield fork(listenForSocketMessages)
  yield take(types.CANCEL_WEBSOCKET)
  yield cancel(socketTask)
  // yield takeEvery(types.CANCEL_WEBSOCKET, function*() {
  //   yield cancel(socketTask)
  //   yield delay(3000)
  //   yield put(startFollowList())
  // })
}
let socket, socketChannel
function* listenForSocketMessages() {
  try {
    socket = yield call(createWebSocketConnection) //sync
    // socket = new WebSocket(WS_URL)
    socketChannel = yield call(createSocketChannel, socket)
    const userId = loadUserData().id
    yield apply(socket, socket.send, [
      JSON.stringify({
        type: 'start_followlist',
        data: {
          id: userId,
        },
      }),
    ])
    // socket.onopen = event => {
    //   console.log(event)
    //   socket.send(
    //     JSON.stringify({
    //       type: 'start_followlist',
    //       data: {
    //         id: userId,
    //       },
    //     }),
    //   )
    // }
    yield takeEvery(types.GET_FOLLOWLIST, function*() {
      const userId = loadUserData().id
      yield apply(socket, socket.send, [
        JSON.stringify({
          type: 'get_followlist',
          data: {
            id: userId,
          },
        }),
      ])
    })
    yield takeEvery(types.CLOSE_PREV_STREAMING, function*(action) {
      yield apply(socket, socket.send, [
        JSON.stringify({
          type: 'stop_streaming',
          data: {
            id: action.id,
          },
        }),
      ])
    })

    yield takeEvery(types.FETCH_CAM_SNAPSHOT, function*(action) {
      const userId = loadUserData().id
      yield apply(socket, socket.send, [
        JSON.stringify({
          type: 'start_streaming',
          data: {
            id: action.id,
            // user_id: userId
          },
        }),
      ])
    })

    yield takeEvery(types.CLOSE_INFO_WINDOW, function*(action) {
      yield apply(socket, socket.send, [
        JSON.stringify({
          type: 'stop_streaming',
          data: {
            id: action.id,
          },
        }),
      ])
    })

    yield takeEvery(types.ADD_CAM_TO_FOLLOWLIST_SUCCESS, function*(action) {
      yield apply(socket, socket.send, [
        JSON.stringify({
          type: 'add_followlist',
          data: {
            id: action.camId,
          },
        }),
      ])
    })

    yield takeEvery(types.REMOVE_CAM_FROM_FOLLOWLIST_SUCCESS, function*(
      action,
    ) {
      yield apply(socket, socket.send, [
        JSON.stringify({
          type: 'remove_followlist',
          data: {
            id: action.camId,
          },
        }),
      ])
    })

    while (true) {
      try {
        const payload = yield take(socketChannel)
        if (payload === 'close_websocket') {
          yield put(cancelWebsocket())
        }
        //start streaming success
        if (payload.type === 'start_streaming_success') {
          yield put(fetchCamStreamingUrlSuccess(payload.data))
          
        }
        if (
          payload.type === 'start_followlist_success' ||
          payload.type === 'add_followlist_success' ||
          payload.type === 'remove_followlist_success'
        ) {
          yield put(getFollowListSuccess(payload.data))
        }
      } catch (error) {
        console.log(error)
      }
    }
  } catch (error) {
    yield put(cancelWebsocket())
    yield put(
      enqueueSnackbar({
        message: 'Kết nối với server thất bại!',
        options: {
          variant: 'error',
        },
      }),
    )
  } finally {
    if (yield cancelled()) {
      yield call(delay, 10000)
      yield put(startFollowList())
    }
  }
}