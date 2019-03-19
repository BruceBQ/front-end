import React, { Component } from 'react';
import { connect } from 'react-redux'
import AddCrossroad from './AddCrossroad';
import EditCrossroad from './EditCrossroad'
import AddView from './AddView'
import AddCamera from './AddCamera_back'
import EditCamera from './EditCamera'
import DeleteCrossroad from './DeleteCrossroad'
import DeleteCamera from './DeleteCamera'

class ModalWrapper extends Component{
    render(){
        switch(this.props.modalType){
            case 'ADD_CROSSROAD':
                return <AddCrossroad title="Add Crossroad" isOpen={this.props.isOpen} modalType={this.props.modalType}/>
            // case 'EDIT_CROSSROAD':
            //     return <EditCrossroad isOpen={this.props.isOpen} modalType={this.props.modalType}/>
            // case 'ADD_VIEW': 
            //     return <AddView title="Add View" isOpen={this.props.isOpen} modalType={this.props.modalType}/>
            case 'ADD_CAMERA':
                return <AddCamera title="Add Camera" isOpen={this.props.isOpen} modalType={this.props.modalType}/>
            // case 'EDIT_CAMERA': 
            //     return <EditCamera isOpen={this.props.isOpen} modalType={this.props.modalType} />
            // case 'DELETE_CROSSROAD':
            //     return <DeleteCrossroad isOpen={this.props.isOpen} data={this.props.data} modalType={this.props.modalType}/>
            // case 'DELETE_CAMERA':
            //     return <DeleteCamera isOpen={this.props.isOpen} data={this.props.data} modalType={this.props.modalType} />
            default:
                return null;
        }
    }
}


const mapStateToProps = ({modal}) => {
    return {
        isOpen: modal.showModal,
        modalType: modal.modalType,
        data: modal.data,
    }
}


export default connect(mapStateToProps)(ModalWrapper)