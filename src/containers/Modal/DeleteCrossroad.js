import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch  } from '@fortawesome/free-solid-svg-icons'
import { closeModal } from '../../actions/action_modal'
import { deleteCrossroad } from '../../actions/action_crossroad'
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
class DeleteCrossroad extends Component{

    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }
    handleDelete = id => event =>{
        this.props.dispatch(deleteCrossroad(id))
    }

    handleCancel(e){
        e.preventDefault()
        this.props.dispatch(closeModal())
    }
    
    render(){
        console.log(this.props)
        const { isOpen, isProcessing, crossroad } = this.props
        return(
            <Modal isOpen={isOpen} style={customStyles} >
                <div className="confirm-content text-center">
                    <span>Are you sure want delete this crossroad ?</span>
                </div>
                <div className='text-center'>
                    <button className="btn btn-delete" disabled={isProcessing ? true : false } onClick={this.handleDelete(crossroad._id)}>
                        {isProcessing ? <FontAwesomeIcon icon={faCircleNotch} spin /> : 'Delete'}
                    </button>
                    <button className="btn btn-cancel" onClick={this.handleCancel}>Cancel</button>
                </div>
            </Modal>
        )
    }
}

const mapStateToProps = ({crossroads}) => {
    const { isProcessing } = crossroads 
    return {
        isProcessing,
        crossroad: crossroads.currentCrossroad.data
    }
}

export default connect(mapStateToProps)(DeleteCrossroad)