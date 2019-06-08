import React, { Component } from 'react'
import { connect } from 'react-redux'

import Loading from './Loading'
import DeleteCamModal from '../../pages/ManageCam/DeleteCamModal'
import AddCamModal from '../../pages/FollowList/AddCamModal'

class ModalWrapper extends Component {
  render() {
    switch (this.props.modalType) {
      case 'LOADING':
        return <Loading />
      case 'DELETE_CAM':
        return <DeleteCamModal />
      case 'ADD_CAM':
        return <AddCamModal />
      default:
        return null
    }
  }
}
const mapStateToProps = ({ modal }) => ({
  modalType: modal.modalType,
})

export default connect(mapStateToProps)(ModalWrapper)
