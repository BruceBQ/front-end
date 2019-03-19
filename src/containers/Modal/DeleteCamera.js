import React, { Component } from 'react';
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch  } from '@fortawesome/free-solid-svg-icons'
import Modal from '../../components/Modal/Modal'

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, .7)'
    },
    content: {
        width: '500px',
        top: '80px',
        left: '0',
        right: '0',
        margin: '5% auto',
        bottom: 'auto',
    }
}

class DeleteCamera extends Component{
    constructor() {
        super()
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleDelete(e){

    }

    render() {
        const {isOpen, isProcessing, } = this.props
        return (
            <Modal isOpen={isOpen} style={customStyles}>
                <form>
                    <input name='id' type="hidden" />
                    <div className="confirm-content text-center">
                        <span>Are you sure want delete this camera ?</span>
                    </div>
                    <div className='text-center'>
                        <button className="btn btn-delete" disabled={isProcessing ? true : false } onClick={this.handleDelete}>
                            {isProcessing ? <FontAwesomeIcon icon={faCircleNotch} spin /> : 'Delete'}
                        </button>
                        <button className="btn btn-cancel" onClick={this.handleCancel}>Cancel</button>
                    </div>
                </form>
            </Modal>
        )
    }
}

const mapStateToProps = ({cameras}) => {
    const { isProcessing } = cameras
    return {
        isProcessing
    }
}

export default connect(mapStateToProps)(DeleteCamera)