import * as types from '../constant/constant_actions'

const INITIAL_STATE = {
  cameras: [],
  addCamera: {
    activeStep: 0,
    id: '',
    name: 'Camera 226',
    port: "80",
    ip: '10.49.34.226',
    cam_user: 'admin',
    cam_pass: 'centic.vn',
    lat: '',
    lng: '',
    province: "",
    district: '',
    commune: '',
    group: '',
    quality: '',
    quality_range: [],
    resolution: '',
    resolution_range: [],
    fps: '',
    fps_range: {},
    bitrate: '',
    bitrate_range: {},
    enabled: true,
    record: true,
    record_max_keep_days: 30,
    record_file_duration: 20,
    stream: true,
    surveillance: true,
    alpr: true,
  },
  isLoading: false,
  isProcessing: false,
  headerMenu: false,
  errors: {},
}

const reducer_camera = ( state = INITIAL_STATE, action ) => {
  switch (action.type){        
    case types.CHANGE_CAMERA_PARAMS:
      return Object.assign({}, state, {
        addCamera: {
          ...state.addCamera,
          ...action.payload
        }
      })
    case types.GET_CAMERA_LOCATION:
      return Object.assign({}, state, {
        addCamera: {
          ...state.addCamera,
          ...action.payload
        }
      })
    case types.GOTO_SITEMAP_PAGE: 
      return Object.assign({}, state, {
        headerMenu: true
      })
    case types.GOTO_SITEMAP_PAGE: 
      return Object.assign({}, state, {
        headerMenu: false
      })
    case types.GET_CAMERA_POSITION_SUCCESS: 
      return Object.assign({}, state, {
        addCamera: {
          ...state.addCamera,
          province: action.province,
          district: action.district,
          commune: action.commune
        }
      })
    // connect camera
    case types.CONNECT_CAMERA_SUCCESS: 
      return Object.assign({}, state, {
        addCamera: {
          ...state.addCamera,
          activeStep: state.addCamera.activeStep + 1,
          ...action.payload
        },
        errors: {}
      })
    case types.CONNECT_CAMERA_FAILURE:
      return Object.assign({}, state, {
        errors: action.errors
      })
    //config params
    case types.CONFIG_PARAMS_SUCCESS:
      return Object.assign({}, state, {
        addCamera: {
          ...state.addCamera,
          activeStep: state.addCamera.activeStep + 1,
        },
        errors: {}
      })
    case types.CONFIG_PARAMS_FAILURE:
      return Object.assign({}, state, {
        errors: action.errors
      })
    // config functions
    case types.CONFIG_FUNCTIONS_SUCCESS:
      return Object.assign({}, state, {
        addCamera: INITIAL_STATE.addCamera
      })
    case types.CONFIG_FUNCTIONS_FAILURE:
      return Object.assign({}, state, {

      })
    // step add camear
    case types.NEXT_STEP:
      return Object.assign({}, state, {
        addCamera: {
          ...state.addCamera,
          activeStep: state.addCamera.activeStep + 1
        }
      })
    case types.BACK_STEP:
      return Object.assign({}, state, {
        addCamera: {
          ...state.addCamera,
          activeStep: state.addCamera.activeStep - 1
        }
      })
    default:
      return state
  }
}

export default reducer_camera