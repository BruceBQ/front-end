import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch  } from '@fortawesome/free-solid-svg-icons'
import TextInput from '../../components/TextInput'
import Modal from '../../components/Modal/Modal'
import { getCrossroad, editCrossroad } from '../../actions/action_crossroad'


const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, .7)'
    },
    content: {
        width: '850px',
        left: '0',
        right: '0',
        margin: 'auto',
        bottom: '40px',
        padding: '0'
    }
}
class EditCrossroad extends Component{
    constructor(props){
        super(props)
        console.log(this.props.crossroad)
        this.state = {
            _id: '',
            data: {
                name: '',
                address: '',
            },
        }
        this.onChange = this.onChange.bind(this)
        this.editCrossroad = this.editCrossroad.bind(this)
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.crossroad ){
            this.setState({
                _id: nextProps.crossroad._id,
                data: {
                    name: nextProps.crossroad.name,
                    address: nextProps.crossroad.address
                }        
            })
        }
        
    }

    onChange(e){
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            }
        })
    }

    editCrossroad(e){
        e.preventDefault()
        console.log(this.state)
        this.props.dispatch(editCrossroad(this.state._id, this.state.data))
    }
    render(){
        const { isProcessing, errors, isOpen, crossroad, isLoading, modalType } = this.props
        const { data } = this.state
        return(
            <Modal isOpen={isOpen} style={customStyles} title="EDIT CROSSROAD" modalType={modalType}>
                { isLoading ? <div className="loader"></div> : 
                <form autoComplete="off">
                    <div className="CenticModal_Body">
                        <div className="form-group">
                            <label className="control-label">Crossroad Name</label>
                            <TextInput name="name" placeholder="Name" type="text" error={errors.name} onChange={this.onChange}  value={data.name}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Crossroad Address</label>
                            <TextInput name="address" placeholder="Address" type="text" error={errors.address} onChange={this.onChange}  value={data.address}/>
                        </div>
                    </div>
                    <div className="CenticModal_Footer">
                        <div className="text-right">
                            <button className="btn btn-save" disabled={ isProcessing ? true : false } onClick={this.editCrossroad}>
                                {isProcessing ? <FontAwesomeIcon icon={faCircleNotch} spin /> : 'Edit'}
                            </button>
                        </div>
                    </div>
                </form> }
            </Modal>
        )
    }
}

const mapStateToProps = ({crossroads, modal}) => {
    const { isProcessing, currentCrossroad, errors } = crossroads
    console.log(currentCrossroad)
    return {
        isLoading: modal.isLoading,
        errors,
        isProcessing,
        crossroad: currentCrossroad.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editCrossroad: (data) => dispatch(editCrossroad(data))
    }
}

export default connect(mapStateToProps)(EditCrossroad)
