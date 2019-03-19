import * as types from '../constant/constant_actions'

const INITIAL_STATE = {
    notifications: []
}

const reducer_notifications = ( state = INITIAL_STATE, action) => {
    switch (action.type){
        case types.ENQUEUE_SNACKBAR:
            return Object.assign({}, state, {
                notifications: [
                    ...state.notifications,
                    {
                        ...action.notification
                    }
                ]
            })
        case types.REMOVE_SNACKBAR:
            return Object.assign({}, state, {
                
            })
        default:
            return state
    }
}

export default reducer_notifications