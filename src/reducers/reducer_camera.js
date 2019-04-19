import * as types from '../constant/constant_actions'
import _ from 'lodash'
import { CardActions } from '@material-ui/core';

const INITIAL_STATE = {
  cameras: [],
  addCamera: {
    activeStep: 2,
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
  editCam: {
    connection: {},
    params: {},
    functions: {},
  },
  currentCam: {
    id: '',
    tabValue: 0,
    connection: {},
    params: {},
    functions: {},
  },
  isSearching: false,
  isFetching: false,
  isProcessing: false,
  isGettingSnapshot: false,
  headerMenu: false,

  focusedCam: -1,
  editingCam: -1,
  isShowLiveView: false,
  isFetchingStreaming: false,
  snapshotImageUrl: null,
  streamingUrl: {},
  errors: {},
}

function updateCam(cams, action) {
  return cams.map((cam, index) => {
    if(action.camId.includes(cam.id)){
      return {
        ...cam,
        is_in_followlist: !cam.is_in_followlist
      }
    }
    return cam
  })
}

function updateStreamUrl(streamingUrl, action){
  if(!_.isEmpty(streamingUrl)){
    return {
      ...streamingUrl,
      is_in_followlist: !streamingUrl.is_in_followlist
    }
  }
  return streamingUrl
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

    //get snapshot
    case types.GET_CAM_SNAPSHOT:
      return Object.assign({}, state, {
        isGettingSnapshot: true, 
        isFetchingStreaming: true,
        snapshotImageUrl: null
      })
    case types.GET_CAM_SNAPSHOT_SUCCESS:
      return Object.assign({}, state, {
        isGettingSnapshot: false,
        snapshotImageUrl: action.snapshotImageUrl
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
    //focused cam
    // case types.FOCUSED_CAM:
    //   return Object.assign({}, state, {

    //   })
    //focused cam
    case types.FOCUS_ON_CAM:
      return Object.assign({}, state, {
        focusedCam: action.id
      })
    case types.CANCEL_FOCUSED_CAM:
      return Object.assign({}, state, {
        editCam: INITIAL_STATE.editCam,
        focusedCam: -1,
      })
    // config cam
    case types.CONFIG_CAM:
      return Object.assign({}, state, {
        focusedCam: action.id,
        editCam: {
          ...state.editCam,
          connection: {
            ...state.editCam.connection,
            name: action.name,
            ip: action.ip,
            ...action.center
          }
        }
      })
    //get connection
    case types.GET_CAM_CONNECTION:
      return Object.assign({}, state, {
        currentCam: {
          ...state.currentCam,
        },
        editCam: {
          ...state.editCam,
        },
        focusedCam: action.id,
        editingCam: action.id,
        isFetching: true
      })
    
    case types.GET_CAM_CONNECTION_SUCCESS:
      return Object.assign({}, state, {
        currentCam: {
          ...state.currentCam,
          connection: action.connection
        },
        editCam: {
          ...state.editCam,
          connection: action.connection
        },
        errors: {},
        isFetching: false,
      })
    case types.GET_CAM_CONNECTION_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
      })
    //change cam connection params
    case types.CHANGE_CAM_CONNECTION_PARAMS:
      return Object.assign({}, state, {
        editCam: {
          ...state.editCam,
          connection: {
            ...state.editCam.connection,
            ...action.payload
          }
        }
      })
    case types.CHANGE_CAM_LOCATION:
      return Object.assign({}, state, {
        editCam: {
          ...state.editCam,
          connection: {
            ...state.editCam.connection,
            ...action.payload
          }
        }
      })
    case types.CHANGE_CAM_POLITICAL:
      return Object.assign({}, state, {
        editCam: {
          ...state.editCam,
          connection: {
            ...state.editCam.connection,
            ...action.payload
          }
        }
      })
    case types.EDIT_CAM_CONNECTION_SUCCESS: 
      return Object.assign({}, state, {
        errors: {}
      })
    case types.EDIT_CAM_CONNECTION_FAILURE:
      return Object.assign({}, state, {
        errors: action.errors
      })
    //get params
    case types.GET_CAM_PARAMS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case types.GET_CAM_PARAMS_SUCCESS: 
      return Object.assign({}, state, {
        currentCam: {
          ...state.currentCam,
          params: action.params
        },
        editCam: {
          ...state.editCam,
          params: action.params
        },
        errors: {},
        isFetching: false,
      })
    case types.GET_CAM_PARAMS_FAILURE: {
      return Object.assign({}, state, {
        
        isFetching: false
      })
    }
    //get functions

    //streaming
    case types.GET_STREAMING_URL:
      return Object.assign({}, state, {
        isShowLiveView: true,
        // isFetchingStreaming: true
      })
    case types.SHOW_INFO_WINDOW: 
      return Object.assign({}, state, {
        streamingUrl: {},
        isFetchingStreaming: true,
        isShowLiveView: false,
      })
    case types.CLOSE_INFO_WINDOW:
      return Object.assign({}, state, {
        isShowLiveView: false,
        isFetchingStreaming: false,
        streamingUrl: null
      })
    case types.GET_STREAMING_URL_SUCCESS:
      return Object.assign({}, state, {
        isFetchingStreaming: false,
        streamingUrl: (action.streamingUrl)
      })

    
    // update follow list
    case types.ADD_CAM_TO_FOLLOWLIST_SUCCESS:
      return Object.assign({}, state, {
        cameras: updateCam(state.cameras, action),
        streamingUrl: updateStreamUrl(state.streamingUrl, action)
      })
    case types.REMOVE_CAM_FROM_FOLLOWLIST_SUCCESS:
      return Object.assign({}, state, {
        cameras: updateCam(state.cameras, action),
        streamingUrl: updateStreamUrl(state.streamingUrl, action)
      })
    default:
      return state
  }
}

export default reducer_camera