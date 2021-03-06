import * as types from '../constant/constant_actions'

const INITIAL_STATE = {
  isOpen: false,
  content: null,
  isLoading: false,
  modalType: null,
  data: null,
}

const reducer_modal = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SHOW_ADD_MODAL:
      return { 
        ...state, 
        showModal: true, 
        modalType: action.modalType 
      }

    case types.SHOW_EDIT_MODAL:
      return {
        ...state,
        showModal: true,
        isLoading: true,
        modalType: action.modalType,
      }

    case types.LOAD_MODAL_DATA_SUCCESS:
      return { 
        ...state, 
        isLoading: false 
      }

    case types.SHOW_DELETE_MODAL:
      return {
        ...state,
        showModal: true,
        modalType: action.modalType,
        id: action.id,
      }

    case types.SHOW_GET_LOCATION_MODAL:
      return {
        ...state,
        showModal: true,
      }

    case types.SHOW_LOADING_MODAL:
      return {
        ...state,
        isOpen: true,
        modalType: 'LOADING',
        content: action.content,
      }

    case types.SHOW_DELETE_CAM_MODAL:
      return {
        ...state,
        isOpen: true,
        modalType: 'DELETE_CAM',
        data: action.payload,
      }
    case types.MODAL__SHOW_ADD_CAM:
      return {
        ...state,
        isOpen: true,
        modalType: 'ADD_CAM'
      }
    case types.CLOSE_MODAL:
      return INITIAL_STATE

    default:
      return state
  }
}

export default reducer_modal
