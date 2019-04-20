import { takeEvery, call, put } from 'redux-saga/effects'
import * as UserAPI from '../api/authentication'
import { enqueueSnackbar } from '../actions/action_snackbar'
import * as types from '../constant/constant_actions'

function* workersignIn(action) {
  try {
    const response = yield call(UserAPI.doSignInRequest, action.user)
    localStorage.setItem('USER', JSON.stringify(response.data))
    yield put({ type: types.LOGIN_SUCCESS, user: response.data })
  } catch (error) {
    // console.log(error.response.data.data)
    yield put({ type: types.LOGIN_FAILURE, errors: error.response.data.data })
    yield put(
      enqueueSnackbar({
        message: 'Đăng nhập thất bại',
        options: {
          variant: 'error',
        },
      }),
    )
  }
}

export function* watcherSignIn() {
  yield takeEvery(types.LOGIN, workersignIn)
}

// function* workerSignUp(){
//     try {
//         const response = yield call(signUp)
//         const user = response.data
//         yield put( {type: types.SIGN_UP_SUCCESS, user} )
//     } catch (error) {
//         yield put( {type: types.SIGN_UP_FAILURE} )
//     }
// }

// export function* watcherSignUp(){
//     yield takeLatest( types.START_AUTHENTICATION, workerSignUp)
// }

// export default function* authenticate(){
//     yield all([
//         fork(watcherSignIn),
//         fork(watcherSignUp)
//     ])
// }
