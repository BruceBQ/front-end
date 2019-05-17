import axios from 'axios'
import { API_URL } from '../constant/constant_endpoint'
import { access_token } from './utils'

export function connectToCam(payload) {
  return axios({
    method: 'post',
    url: `${API_URL}api/camera/connect`,
    headers: { Authorization: access_token },
    data: { ...payload },
  })
}

export function configCamParams(payload) {
  return axios({
    method: 'post',
    url: `${API_URL}api/camera/params`,
    headers: { Authorization: access_token },
    data: { ...payload },
  })
}

export function configCamFunctions(payload) {
  return axios({
    method: 'post',
    url: `${API_URL}api/camera/functions`,
    headers: { Authorization: access_token },
    data: { ...payload },
  })
}

export function searchCamera(payload) {
  return axios({
    method: 'post',
    url: `${API_URL}api/camera/search`,
    headers: { Authorization: access_token },
    data: { ...payload },
  })
}

export function getCamConnection(id) {
  return axios({
    method: 'get',
    url: `${API_URL}api/camera/${id}/connect`,
    headers: { Authorization: access_token },
  })
}

export function fetchCamConnection(id) {
  return axios({
    method: 'get',
    url: `${API_URL}api/camera/${id}/connect`,
    headers: { Authorization: access_token },
  })
}

export function editCamConnection(id, payload) {
  return axios({
    method: 'put',
    url: `${API_URL}api/camera/${id}/connect`,
    headers: { Authorization: access_token },
    data: { ...payload },
  })
}

export function getCamParams(id) {
  console.log(id)
  return axios({
    method: 'get',
    url: `${API_URL}api/camera/${id}/params`,
    headers: { Authorization: access_token },
  })
}

export function fetchCamParams(id) {
  return axios({
    method: 'get',
    url: `${API_URL}api/camera/${id}/params`,
    headers: { Authorization: access_token },
  })
}

export function editCamParams(id, payload) {
  return axios({
    method: 'put',
    url: `${API_URL}api/camera/${id}/params`,
    headers: { Authorization: access_token },
    data: { ...payload },
  })
}

export function fetchCamFunctions(id) {
  return axios({
    method: 'get',
    url: `${API_URL}api/camera/${id}/functions`,
    headers: { Authorization: access_token },
  })
}

export function editCamFunctions(id, payload) {
  return axios({
    method: 'put',
    url: `${API_URL}api/camera/${id}/functions`,
    headers: { Authorization: access_token },
    data: { ...payload },
  })
}

export function getCamSnapshot(id) {
  return axios({
    method: 'get',
    url: `${API_URL}api/camera/${id}/snapshot`,
    headers: { Authorization: access_token },
  })
}

export function fetchCamSnapshot(id){
  return axios({
    method: 'get',
    url: `${API_URL}api/camera/${id}/snapshot`,
    headers: { Authorization: access_token },
  })
}

export function fetchAllCams() {
  return axios({
    method: 'get',
    url: `${API_URL}api/camera`,
    header: { Authorization: access_token },
  })
}

export function deleteCam(id) {
  return axios({
    method: 'delete',
    url: `${API_URL}api/camera/${id}`,
    header: { Authorization: access_token },
  })
}

export function changeCamStatus(id, payload) {
  return axios({
    method: 'put',
    url: `${API_URL}api/camera/${id}/status`,
    header: { Authorization: access_token },
    data: { ...payload }
  })
}