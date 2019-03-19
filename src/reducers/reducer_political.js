import * as types from '../constant/constant_actions'

const INITTIAL_STATE = {
    provinces: [],
    districts: [],
    communes: []
}

const reducer_political = (state = INITTIAL_STATE, action) => {
    switch (action.type) {
        case types.GET_ALL_PROVINCES: 
            return Object.assign({}, state, {
                provinces: action.provinces
            })
        case types.GET_PROVINCES_SUCCESS:
            return Object.assign({}, state, {
                provinces: action.provinces
            })
        case types.GET_DISTRICTS_SUCCESS: 
            return Object.assign({}, state, {

            })
        case types.GET_COMMUNES_SUCCESS:
            return Object.assign({}, state, {

            })
        case types.GET_POLITICAL_SUCCESS: 
            return Object.assign({}, state, {
                districts: action.districts,
                communes: action.communes
            })
        case types.RELOAD_POLITICAL: 
            return Object.assign({}, state, {
                ...action.payload
            })
        default:
            return state
    }
}

export default reducer_political