import React from 'react';
import * as types from '../constant/constant_actions'
import { toast } from 'react-toastify'
import ToastContent from '../components/ToastContent'

const INITIAL_STATE = {
    crossroads: [],
    currentCrossroad: {
        data: {},
    },
    isLoading: false,
    isProcessing: false,
    errors: {}
}

const reducer_crossroad = ( state = INITIAL_STATE, action ) => {
    const handleEdit = (crossroads, aciton) => {
        return crossroads.map( crossroad => {
            return crossroad._id === aciton.data._id ? crossroad = action.data : crossroad
        })
    }

    switch(action.type){
        case types.GET_CROSSROADS:
            return { ...state, isLoading: true }
        case types.GET_CROSSROADS_SUCCESS: 
            return { ...state, crossroads: action.crossroads, isLoading: false }
        case types.GET_CROSSROADS_FAILURE:
            return { ...state, isLoading: false }
        case types.GET_CROSSROAD:
            return { ...state }
        case types.GET_CROSSROAD_SUCCESS:
            return {
                ...state,
                currentCrossroad: {
                    ...state.currentCrossroad,
                    data: action.currentCrossroad
                }
            }
        case types.GET_CROSSROAD_FAILURE:
            return {
                ...state }
        case types.ADD_CROSSROAD:
            return { ...state, isProcessing: true }
        case types.ADD_CROSSROAD_SUCCESS: 
            toast.success(<ToastContent type="SUCCESS" content={'Thêm nút thành công!'} />)
            return { ...state, isProcessing: false, crossroads: [ action.newCrossroad, ...state.crossroads] , errors: {} }
        case types.ADD_CROSSROAD_FAILURE:
            toast.error(<ToastContent type="ERROR" content={'Thêm nút thất bại!'} />)
            return { ...state, isProcessing: false, errors: action.error.messages }
        case types.EDIT_CROSSROAD:
            return { 
                ...state, isProcessing: true
            }
        case types.EDIT_CROSSROAD_SUCCESS:
            toast.success(<ToastContent type="SUCCESS" content={'Sửa thông tin nút thành công!'} />)
            return { ...state, 
                crossroads: handleEdit(state.crossroads,action),
                isProcessing: false,
                currentCrossroad: INITIAL_STATE.currentCrossroad
            }

        case types.EDIT_CROSSROAD_FAILURE:
            
        toast.error(<ToastContent type="ERROR" content={action.error.messages.edited} />)
            return { ...state, 
                currentCrossroad: {
                    ...state.currentCrossroad,
                    // errors: action.error.messages
                },
                isProcessing: false,
                errors: action.error.messages
            }
        case types.DELETE_CROSSROAD:
            return { ...state, isProcessing: true }
        case types.DELETE_CROSSROAD_SUCCESS: 
            toast.success(<ToastContent type="SUCCESS" content={'Xóa nút thành công!'} />)
            const crossroads = state.crossroads.filter( (crossroad) => crossroad._id !== action.id )
            return { ...state, isProcessing: false,  crossroads }
        case types.DELETE_CROSSROAD_FAILURE:
            toast.error(<ToastContent type="ERROR" content={'Xóa nút thất bại!'} />)
            return { ...state, isProcessing: false, errors: action.error.messages }
        case types.CLEAR_CROSSROAD_ERROR:
            return { ...state, errors: {} }
        default:
            return { ...state, isLoading: false }
    }
}

export default reducer_crossroad