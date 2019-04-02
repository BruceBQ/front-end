import * as types from '../constant/constant_actions'
import { CardActions } from '@material-ui/core';

const INITIAL_STATE = {
  cameras: [],
  addCamera: {
    activeStep: 0,
    name: 'Camera 237',
    port: "80",
    ip: '10.49.34.237',
    cam_user: 'admin',
    cam_pass: 'centic.vn',
    lat: '',
    lng: '',
    information: {},
    rtsp_link: '',
    snapshot_url: '',
    province: null,
    district: null,
    commune: null,
    group: [],
    encoding: '',
    quality: null,
    quality_range: [],
    resolution: '',
    resolution_range: [],
    fps: '',
    fps_range: {},
    bitrate: '',
    bitrate_range: {},
    record: true,
    record_max_keep_days: 30,
    record_file_duration: 20,
    stream: true,
    surveillance: true,
    alpr: true,
    snapshot_image_url: '',
    snapshot_image_name: '',
  },
  searchCam: {
    string: '',
    province: null,
    district: [],
    commune: [],
    group: [],
    state_cam: null,
  },
  isSearching: false,
  isLoading: false,
  isProcessing: false,
  headerMenu: false,
  cameraFocused: -1,
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
    //change search camera params
    case types.CHANGE_SEARCH_CAM_PARAMS:
      return Object.assign({}, state, {
        searchCam: {
          ...state.searchCam,
          ...action.payload
        }
      })
    //clear province
    case types.CLEAR_PROVINCE:
      return Object.assign({}, state, {
        searchCam: {
          ...state.searchCam,
          province: null,
          district: [],
          commune: [],
        }
      })
    //clear district
    case types.CLEAR_DISTRICT:
      return Object.assign({}, state, {
        searchCam: {
          ...state.searchCam,
          district: [],
          commune: []
        }
      })
    //search camera
    case types.SEARCH_CAMERA: 
      return Object.assign({}, state, {
        isSearching: true
      })
    case types.SEARCH_CAMERA_SUCCESS:
      return Object.assign({}, state, {
        isSearching: false,
        cameras: action.payload
      })
    case types.SEARCH_CAMERA_FAILURE: 
      return Object.assign({}, state, {
        isSearching: false,
        errors: action.errors
      })
    // step add camera
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