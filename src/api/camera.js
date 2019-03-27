import axios from 'axios'
import { API_URL } from '../constant/constant_endpoint'
import access_token from './utils'

export function getCamerasRequest(){
  return axios({
    method: 'get',
    url: `${API_URL}api/sitemap/cameras`,
    headers: {
      'Authorization': access_token
    },
  })
}

export function getCameraRequest(id){
  return axios({
    method: 'get',
    url: `${API_URL}api/sitemap/camera/${id}`,
    headers: {
      'Authorization': access_token
    }
  })
}

export function addCameraRequest(data){
  console.log(data)
  return axios({
    method: 'post',
    url: `${API_URL}api/sitemap/camera`,
    headers: {
      'Authorization': access_token
    },
    data: data
  })
}

export function editCameraRequest(id, data){
    return axios({
        method: 'put',
        url:`${API_URL}api/sitemap/camera/${id}`,
        headers: {
            'Authorization': access_token
        },
        data: data
    })
}

export function deleteCameraRequest(){
    return axios({
        method: 'delete',
        
    })
}

export function checkCameraAuthRequest(data){
    return axios({
        method: 'post',
        url: `${API_URL}api/sitemap/check_camera?step=auth`,
        headers: {
            'Authorization': access_token
        },
        data: data
    })
}

export function checkCameraLocationRequest(data){
    return axios({
        method: 'post',
        url: `${API_URL}api/sitemap/check_camera?step=location`,
        headers: {
            'Authorization': access_token
        },
        data: data
    })
}

export function checkCameraIdentityRequest(data){
    return axios({
        method: 'post',
        url: `${API_URL}api/sitemap/check_camera?step=identity`,
        headers: {
            'Authorization': access_token
        },
        data: data
    })
}

export function checkCameraConfigs(data){
    return axios({
        method: 'post',
        url:`${API_URL}api/sitemap/check_camera?step=configs`,
        headers: { 'Authorization': access_token },
        data: data
    })
}

export function loadDistrictRequest(data){
    console.log(data)
    return axios({
        method: 'post',
        url: `${API_URL}api/sitemap/list_district`,
        data: {
            province_code: data
        }
    })
}

export function loadCommuneRequest(data){
    return axios({
        method: 'post',
        url: `${API_URL}api/sitemap/list_commune`,
        data: {
            district_code: data
        }

    })
}

export function getCameraInfo(id){
    return axios({
        method: 'get',
        url: `${API_URL}api/sitemap/camera/${id}`,
        params: {
            data: 'info'
        },
        headers: { 'Authorization': access_token },
    })
}

export function getCameraLocations(id){
    return axios({
        method: 'get',
        url: `${API_URL}api/sitemap/camera/${id}`,
        params: {
            data: 'locations'
        },
        headers: { 'Authorization': access_token },
    })
}

export function editCameraLocations(id, data){
    return axios({
        method: 'put',
        url: `${API_URL}api/sitemap/camera/${id}`,
        params: {
            data: 'locations',
        },
        headers: { 'Authorization': access_token },
        data: data
    })
}

export function getCameraConfigs(id){
    return axios({
        method: 'get',
        url: `${API_URL}api/sitemap/camera/${id}`,
        params: {
            data: 'configs'
        },
        headers: { 'Authorization': access_token}
    })
}

export function editCameraConfigs(id, data){
    return axios({
        method: 'put',
        url: `${API_URL}api/sitemap/camera/${id}`,
        params: {
            data: 'configs'
        },
        headers: { 'Authorization': access_token },
        data: data
    })
}

export function getProvincesAvailable(){
    return axios({
        method: 'get',
        url: `${API_URL}api/sitemap/provinces_available`,
        headers: { 'Authorization': access_token },
    })
}

export function getDistrictsAvailable(province) {
    return axios({
        method: 'get',
        url: `${API_URL}api/sitemap/districts_available`,
        params: {
            province: province
        },
        headers: { 'Authorization': access_token }
    })
}

export function connectCamera(payload){
  return axios({
    method: 'post',
    url: `${API_URL}api/camera/connect`,
    headers: { 'Authorization': access_token },
    data: {...payload}
  })
}

export function configParams(payload){
  return axios({
    method: 'post',
    url: `${API_URL}api/camera/params`,
    headers: { 'Authorization': access_token },
    data: {...payload}
  })
}

export function configFunctions(payload){
  return axios({
    method: 'post',
    url: `${API_URL}api/camera/functions`,
    headers: { 'Authorization': access_token },
    data: {...payload}
  })
}

export function searchCamera(payload){
  return axios({
    method: 'post',
    url: `${API_URL}api/camera/search`,
    headers: { 'Authorization': access_token },
    data: { ...payload }
  })
}