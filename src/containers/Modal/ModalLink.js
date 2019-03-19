import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ModalLink from '../../components/Modal/ModalLink'
import React, { Component } from 'react';


const mapStateToProps = (state) => {

}
class ModalLinkContainer extends Component{
    render(){
        return (
            <ModalLink {...this.props}/>
        )
    }
}
export default withRouter(connect()(ModalLinkContainer))