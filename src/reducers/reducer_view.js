import * as types from '../constant/constant_actions'

const INITIAL_STATE = {
    singleViews: [],
    currentView: {},
    isLoading: false,
    isProcessing: false,
    errors: {},
}

const reducer_view = ( state = INITIAL_STATE, action ) => {
    switch(action.type){
        case types.GET_SINGLEVIEWS:
            return { ...state, isLoading: true}
        case types.GET_SINGLEVIEWS_SUCCESS: 
            return { ...state, singleViews: action.singleViews, isLoading: false }
        case types.GET_SINGLEVIEWS_FAILURE:
            return { ...state, isLoading: false }
        case types.GET_VIEW_SUCCESS:
            return { ...state, currentView: action.currentView }
        case types.ADD_VIEW:
            return { ...state, isProcessing: true }
        case types.ADD_VIEW_SUCCESS: 
            return { ...state, isProcessing: false }
        case types.ADD_VIEW_FAILURE:
            return { ...state, isProcessing: false }
        default: 
            return { ...state, isLoading: false }
    }
}

export default reducer_view