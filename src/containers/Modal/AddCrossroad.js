import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch  } from '@fortawesome/free-solid-svg-icons'
import TextInput from '../../components/TextInput'
import Modal from '../../components/Modal/Modal'
import { addCrossroad } from '../../actions/action_crossroad'


const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, .7)'
    },
    // content: {
    //     width: '850px',
    //     left: '0',
    //     right: '0',
    //     margin: 'auto',
    //     bottom: '40px',
    //     padding: '0'
    // }
}
class AddCrossroad extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            name: '',
            address: '',
        }
        this.onChange = this.onChange.bind(this)
        this.addCrossroad = this.addCrossroad.bind(this)
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addCrossroad(e){
        e.preventDefault()
        this.props.dispatch(addCrossroad(this.state))
    }
    render(){
        const { isProcessing, errors, isOpen, modalType } = this.props
        return(
            <Modal isOpen={isOpen} style={customStyles} title="THÊM CROSSROAD" modalType={modalType}>
                <form autoComplete="off">
                    <div className="CenticModal_Body">
                        <div className="form-group">
                            <label className="control-label">Tên</label>
                            <TextInput name="name" placeholder="Nhập tên nút" type="text" onChange={this.onChange} error={errors.name} value={this.state.name}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Địa chỉ</label>
                            <TextInput name="address" placeholder="Nhập địa chỉ nút" type="text" onChange={this.onChange} error={errors.address} value={this.state.address}/>
                        </div>
                    </div>
                    <div className="CenticModal_Footer">
                        <div className="text-right">
                            <button className="btn btn-save" disabled={isProcessing ? true : false } onClick={this.addCrossroad}>
                                {isProcessing ? <FontAwesomeIcon icon={faCircleNotch} spin /> : 'Thêm'}
                            </button>
                        </div>
                    </div>
                </form>
            </Modal>
        )
    }
}

const mapStateToProps = ({crossroads}) => {
    const { isProcessing, errors } = crossroads
    return {
        isProcessing, errors
    }
}

export default connect(mapStateToProps)(AddCrossroad)
