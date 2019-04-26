import * as types from '../constant/constant_actions'

const INITIAL_STATE = {
  vehicles: [],
  search: {
    string: '',
    startTime: null,
    endTime: null
  },
  isFetching: false,
  currentPage: 1,
  totalPage: 5,
  hoveredVehicle: {},
  focusedVehicle: {},
  selectedPlate: null,
}

const reducer_searchVehicles = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CLEAR_VEHCLIES:
      return Object.assign({}, state, {
        vehicles: [],
        currentPage: 1,
        hoveredVehicle: {},
        focusedVehicle: {},
        selectedPlate: null,
      })
    case types.SEARCH_VEHICLES:
      return Object.assign({}, state, {
        search: {
          ...state.search,
          string: action.payload.string,
          startTime: action.payload.start_time,
          endTime: action.payload.end_time,
        },
        isFetching: true,
      })
    case types.SEARCH_VEHICLES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        vehicles: state.vehicles.concat(action.vehicles),
        currentPage: state.currentPage + 1
      })
    case types.SEARCH_VEHICLES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
      })
    case types.HOVER_ROW_VEHICLE: 
      return Object.assign({}, state, {
        hoveredVehicle: action.vehicle
      })
    case types.CANCEL_HOVER_ROW_VEHICLE:
      return Object.assign({}, state, {
        hoveredVehicle: {}
      })
    case types.FOCUS_VEHICLE:
      return Object.assign({}, state, {
        focusedVehicle: action.vehicle,
        selectedPlate: action.vehicle.plate_number
      })
    default:
      return state
  }
}

function fetchVehiclesSuccess(state, action) {
  let vehicles = state.vehicles
  
}


export default reducer_searchVehicles