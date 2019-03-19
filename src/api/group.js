import axios from 'axios'
import { API_URL } from '../constant/constant_endpoint'
import access_token from './utils'

export function createGroup(payload){
    return axios({
        method: 'post',
        url: `${API_URL}api/group`,
        headers: {
            'Authorization': access_token
        },
        data: payload
    })
}

