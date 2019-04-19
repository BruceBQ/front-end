import axios from 'axios'
import { API_URL } from '../constant/constant_endpoint'

export function doSignInRequest(user) {
  return axios({
    method: 'post',
    url: `${API_URL}api/user/login`,
    data: user,
  })
}

export function doSignUpRequest({ username, password }) {
  return axios({
    method: 'post',
    url: `${API_URL}api/user/signup`,
    data: {
      username: username,
      password: password,
    },
  })
}
