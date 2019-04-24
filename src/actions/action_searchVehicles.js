import * as types from '../constant/constant_actions'
import  actionCreator from '../utils/actionCreator'

export const clearVehicles = actionCreator(types.CLEAR_VEHCLIES)

export const searchVehicles = actionCreator(types.SEARCH_VEHICLES, 'payload')

export const searchVehiclesSuccess = actionCreator(types.SEARCH_VEHICLES_SUCCESS, 'vehicles')