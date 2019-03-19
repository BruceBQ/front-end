import React from 'react';
// import _ from 'lodash'
import * as types from '../constant/constant_actions'
import { toast } from 'react-toastify'
import ToastContent from '../components/ToastContent'

const INITIAL_STATE = {
    cameras: [],
    canAddCam: false,
    addCamera: {
        name: 'Camera 236',
        port: 80,
        ip: '10.49.34.236',
        cam_user: 'admin',
        cam_pass: 'centic.vn',
        lat: '',
        lng: '',
        province: '',
        district: '',
        commune: '',
        group: '',
        // errors: {}
    },
    isLoading: false,
    isProcessing: false,
    headerMenu: false,
    errors: {},
}

const reducer_camera = ( state = INITIAL_STATE, action ) => {
    switch (action.type){
        case types.GET_CAMERAS:
            return Object.assign({}, state, {
                isLoading: true,
            })
        case types.GET_CAMERAS_SUCCESS:
            return Object.assign({}, state, {
                cameras: action.cameras,
                isLoading: false,
                errors: {}
            })
        case types.GET_CAMERAS_FAILURE:
            return Object.assign({}, state, {
                isLoading: false,
                errors: action.errors,
            })
        case types.GET_CAMERA:
            return Object.assign({}, state, {
                isLoading: true
            })
        case types.GET_CAMERA_SUCCESS:
            return Object.assign({}, state, {
                currentCamera: action.currentCamera,
                isLoading: false,
                provinces: action.provinces,
                districts: action.districts,
                communes: action.communes
            })
        case types.GET_CAMERA_INFO:
            return Object.assign({}, state, {
                isLoading: true
            })
        case types.GET_CAMERA_INFO_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                currentCamera: {
                    ...state.currentCamera,
                    information: action.info,
                }
            })
        case types.GET_CAMERA_LOCATIONS:
            return Object.assign({}, state, {
                isLoading: true
            })
        case types.GET_CAMERA_LOCATIONS_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                currentCamera: {
                    ...state.currentCamera,
                    locations: action.locations.location,
                    provinces: action.provinces,
                    districts: action.districts,
                    communes: action.communes,
                }
            })
        case types.EDIT_CAMERA_LOCATIONS:
            return Object.assign({}, state, {
                isProcessing: true,
            })
        case types.EDIT_CAMERA_LOCATIONS_SUCCESS:
            toast.success(<ToastContent type="SUCCESS" content={'Thay đổi vị trí thành công!'} />)
            return Object.assign({}, state, {
                isProcessing: false
            })
        case types.GET_CAMERA_CONFIGS: 
            return Object.assign({}, state, {
                isLoading: true,
            })
        case types.GET_CAMERA_CONFIGS_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                currentCamera: {
                    ...state.currentCamera,
                    configs: action.configs
                }
            })
        case types.EDIT_CAMERA_CONFIGS:
            return Object.assign({}, state, {
                isProcessing: true
            })
        case types.EDIT_CAMERA_CONFIGS_SUCCESS:
            toast.success(<ToastContent type="SUCCESS" content={'Cấu hình camera thành công!'} />)
            return Object.assign({}, state, {
                isProcessing: false
            })
        case types.ADD_CAMERA_SUCCESS:
            toast.success(<ToastContent type="SUCCESS" content={'Thêm camera thành công!'} />)
            return Object.assign({}, state, {
                isProcessing: false,
                cameras: [
                    action.camera, ...state.cameras
                ],
                currentCamera: INITIAL_STATE.currentCamera
            })
            // return { ...state, isProcessing: false, cameras: [action.camera, ...state.cameras], error: {} }
        case types.ADD_CAMERA_FAILURE:
            toast.error(<ToastContent type="ERROR" content={'Add Camera Fail!'} />)
            return { ...state, errors: action.errors }
        case types.CLEAR_CAMERA_ERRORS:
            // return { ...state, errors: {}}
            return Object.assign({}, state, {
                currentCamera: {
                    ...state.currentCamera,
                    activeStep: 0,
                } ,
                errors: {}
            })
        case types.CHECK_CAMERA_AUTH:
            return { ...state, isProcessing: true , checkCamera: INITIAL_STATE.checkCamera, errors: {} }
        case types.CHECK_CAMERA_AUTH_SUCCESS: 
            return Object.assign({}, state, {
                isProcessing: false,
                currentCamera: {
                    ...state.currentCamera,
                    provinces: action.provinces,
                    configs: action.configs,
                    activeStep: state.currentCamera.activeStep + 1,
                },
            })
        case types.CHECK_CAMERA_AUTH_FAILURE:
            toast.error(<ToastContent type="ERROR" content={'Không thể kết nối tới camera'} />)
            return Object.assign({}, state, {
                isProcessing: false,
                currentCamera: INITIAL_STATE.currentCamera,
                errors: action.errors
            })
            // return { ...state, isProcessing: false, checkCamera: { ...state.checkCamera, activeStep: 0, data: {}}, errors: action.errors}
        case types.CHECK_CAMERA_LOCATION:
            return Object.assign({}, state, {
                isProcessing: true
            })
        case types.CHECK_CAMERA_LOCATION_SUCCESS:
            return Object.assign({}, state, {
                isProcessing: false,
                currentCamera: {
                    ...state.currentCamera,
                    activeStep: state.currentCamera.activeStep + 1,
                },
                errors: {}
            })
            // return { ...state, isProcessing: false, checkCamera: { ...state.checkCamera, activeStep: state.checkCamera.activeStep + 1 }, errors: {}}
        case types.CHECK_CAMERA_LOCATION_FAILURE:
            return Object.assign({}, state, {
                isProcessing: false,
                errors: action.errors,
            })
        case types.CHECK_CAMERA_CONFIGS:
            return Object.assign({}, state, {
                isProcessing: true
            })
        case types.CHECK_CAMERA_CONFIGS_FAILURE:
            return Object.assign({}, state, {
                isProcessing: false,
                errors: action.errors,
            })
        case types.LOAD_DISTRICT_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                currentCamera: {
                    ...state.currentCamera,
                    districts: action.districts,
                    communes: []
                }
            })
        case types.LOAD_COMMUNE_SUCCESS:
            return Object.assign({}, state, {
                isProcessing: false,
                currentCamera: {
                    ...state.currentCamera,
                    communes: action.communes
                }               
            })
            // return { ...state, isProcessing: false, checkCamera: { ...state.checkCamera, data: {...state.checkCamera.data, communes: action.communes}}}
        case types.BACK_STEP: 
            return Object.assign({}, state, {
                currentCamera: {
                    ...state.currentCamera,
                    activeStep: state.currentCamera.activeStep - 1,
                }
            })
            // return { ...state, checkCamera: { ...state.checkCamera, activeStep: state.checkCamera.activeStep - 1 }}
        case types.GET_PROVINCES_AVAILABLE_SUCCESS:
            return Object.assign({}, state, {
                search: {
                    ...state.search,
                    provinces: action.provinces
                }

            })
        case types.GET_DISTRICTS_AVAILABLE_SUCCESS: 
            return Object.assign({}, state, {
                search: {
                    ...state.search,
                    districts: action.districts
                }
            })
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
        case types.ACTIVE_ADD_CAMERA:
            return Object.assign({}, state, {
                canAddCam: true
            })
        case types.DISABLE_ADD_CAMERA:
            return Object.assign({}, state, {
                canAddCam: false
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
        default:
            return { ...state}
    }
}

export default reducer_camera