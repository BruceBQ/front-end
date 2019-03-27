import axios from 'axios'
import { API_URL } from '../constant/constant_endpoint'
import access_token from './utils'

export function getAllProvinces(){
  return axios({
    method: 'get',
    url: `${API_URL}api/political/provinces`,
    headers: { 'Authorization': access_token },
  })
}


export function loadDistricts(province){
  return axios({
    method: 'get',
    url: `${API_URL}api/political/districts`,
    headers: {
        'Authorization': access_token
    },
    params: {
        province: province
    }
  })
}
export function loadCommunes(district){
  return axios({
    method: 'get',
    url: `${API_URL}api/political/communes`,
    headers: {
      'Authorization': access_token
    },
    params: {
      district: district
    }
  })
}

export function getProvincesAvailable(){
  return axios({
    method: 'get',
    url: `${API_URL}api/political/provinces/available`,
    headers: { 'Authorization': access_token },
    // params: {
    //   type: 'available'
    // }
  })
}

export function getDistrictsAvailable(province){
  return axios({
    method: 'get',
    url: `${API_URL}api/political/districts/available`,
    headers: { 'Authorization': access_token },
    params: {
      province: province
    }
  })
}

export function getCommunesAvailable(district){
  return axios({
    method: 'get',
    url: `${API_URL}api/political/communes/available`,
    headers: { 'Authorization': access_token },
    params: {
      district: district
    }
  })
}