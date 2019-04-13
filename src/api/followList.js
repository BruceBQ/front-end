import axios from 'axios'
import { API_URL } from '../constant/constant_endpoint'
import { access_token, userId } from './utils'

export function addCamToFollowList(camId){
  return axios({
    method: 'post',
    url:`${API_URL}api/followList`,
    headers: { 'Authorization': access_token },
    data: {
      cam_list: camId,
      user_id: userId
    }
  })
}

export function removeCamFromFollowList(camId){
  return axios({
    method: 'delete',
    url: `${API_URL}api/followList`,
    headers: { 'Authorization': access_token },
    data: {
      cam_list: camId,
      user_id: userId
    }
  })
}