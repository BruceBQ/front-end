import React, { Component } from 'react';
import { connect } from 'react-redux'
import Loading from './Loading'

class ModalWrapper extends Component{
    render(){
        switch(this.props.modalType){
            case 'LOADING':   
                return <Loading />
            default: 
                return null
        }    
    }
}
const mapStateToProps = ({modal}) => ({
    modalType: modal.modalType
})

export default connect(mapStateToProps)(ModalWrapper)