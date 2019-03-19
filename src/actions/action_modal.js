import * as types from '../constant/constant_actions'

export function showAddModal(modalType){
    return {
        type: types.SHOW_ADD_MODAL,
        modalType,
        // data: data,
    }
}

export function showEditModal({modalType, id}){
    return {
        type: types.SHOW_EDIT_MODAL,
        modalType,
        id
    }
}

export function showLoadingModal(content){
    return {
        type: types.SHOW_LOADING_MODAL,
        content
    }
}

export function loadModalDataSuccess(){
    return {
        type: types.LOAD_MODAL_DATA_SUCCESS
    }
}

export function showDeleteModal({modalType, id}){
    return {
        type: types.SHOW_DELETE_MODAL,
        modalType,
        id
    }
}


export function closeModal(modalType){
    console.log(modalType)
    return {
        type: types.CLOSE_MODAL,
        modalType
    }
}