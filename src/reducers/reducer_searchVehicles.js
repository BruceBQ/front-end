import * as types from '../constant/constant_actions'

const INITIAL_STATE = {
  vehicles: [],
  search: {
    string: '',
    startTime: null,
    endTime: null,
    filter: null,
  },
  isFetching: false,
  currentPage: 0,
  totalPage: 1,
  hoveredVehicle: {},
  focusedVehicle: {},
  selectedPlate: null,
}

function updateTotalPage(state, action) {
  if(action.vehicles.length === 0){
    return state.totalPage
  } 
  return state.totalPage + 1
}

const reducer_searchVehicles = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CLEAR_VEHCLIES:
      return {
        ...state,
        vehicles: [],
        currentPage: 0,
        totalPage: 1,
        hoveredVehicle: {},
        focusedVehicle: {},
        selectedPlate: null,
      }

    case types.SEARCH_VEHICLES:
      return {
        ...state,
        search: {
          ...state.search,
          string: action.payload.string,
          startTime: action.payload.start_time,
          endTime: action.payload.end_time,
          filter: action.payload.filter
        },
        isFetching: true,
      }

    case types.SEARCH_VEHICLES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        vehicles: state.vehicles.concat(action.vehicles),
        currentPage: state.currentPage + 1,
        totalPage: updateTotalPage(state, action)
      }

    case types.SEARCH_VEHICLES_FAILURE:
      return {
        ...state,
        isFetching: false,
      }

    case types.HOVER_ROW_VEHICLE: 
      return {
        ...state,
        hoveredVehicle: action.vehicle
      }

    case types.CANCEL_HOVER_ROW_VEHICLE:
      return {
        ...state,
        hoveredVehicle: {}
      }

    case types.FOCUS_VEHICLE:
      return {
        ...state,
        focusedVehicle: action.vehicle,
        selectedPlate: action.vehicle.plate_number
      }

    default:
      return state
  }
}

function fetchVehiclesSuccess(state, action) {
  let vehicles = state.vehicles
  
}

export default reducer_searchVehicles