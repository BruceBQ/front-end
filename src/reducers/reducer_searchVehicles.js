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
  cams: [],
  hoveredVehicle: {},
  focusedVehicle: {},
  selectedPlate: null,
}

function updateTotalPage(state, action) {
  if (action.vehicles.length === 0) {
    return state.totalPage
  }
  return state.totalPage + 1
}

function updateCam(state, action) {
  let cams = state.cams
  action.vehicles.forEach(vehicle => {
    if (vehicle.match === true && !cams.includes(vehicle.camera.id)) {
      console.log(cams)
      cams.push(vehicle.camera.id)
    }
  })
  return cams
}

function updatePlate(state, action) {
  console.log('update plate')
  let plateNumber = state.selectedPlate
  action.vehicles.forEach(vehicle => {
    if (vehicle.match) plateNumber = vehicle.plate_number
  })
  return plateNumber
}

function changeCamFocused(state, action) {
  console.log('change cam focused')
  let cams = []
  state.vehicles.forEach(vehicle => {
    if (
      vehicle.plate_number === action.vehicle.plate_number &&
      !cams.includes(vehicle.camera.id)
    ){
      cams.push(vehicle.camera.id)
    }
  })
  return cams
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
        cams: [],
      }

    case types.SEARCH_VEHICLES:
      return {
        ...state,
        search: {
          ...state.search,
          string: action.payload.string,
          startTime: action.payload.start_time,
          endTime: action.payload.end_time,
          filter: action.payload.filter,
        },
        cams: [],
        isFetching: true,
      }

    case types.SEARCH_VEHICLES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        vehicles: state.vehicles.concat(action.vehicles),
        currentPage: state.currentPage + 1,
        totalPage: updateTotalPage(state, action),
        cams: updateCam(state, action),
        selectedPlate: updatePlate(state, action),
      }

    case types.SEARCH_VEHICLES_FAILURE:
      return {
        ...state,
        isFetching: false,
      }

    case types.HOVER_ROW_VEHICLE:
      return {
        ...state,
        hoveredVehicle: action.vehicle,
      }

    case types.CANCEL_HOVER_ROW_VEHICLE:
      return {
        ...state,
        hoveredVehicle: {},
      }

    case types.FOCUS_VEHICLE:
      return {
        ...state,
        focusedVehicle: action.vehicle,
        selectedPlate: action.vehicle.plate_number,
        cams: changeCamFocused(state, action),
      }

    default:
      return state
  }
}

export default reducer_searchVehicles
