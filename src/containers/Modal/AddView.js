import React, { Component } from 'react';
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch  } from '@fortawesome/free-solid-svg-icons'
import Select from 'react-select'
import _ from 'lodash'
import { addView } from '../../actions/action_view'
import Modal from '../../components/Modal/Modal'
import TextInput from '../../components/TextInput'



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

const selectStyles = {
    control: (styles) => ({
        ...styles,
        // border: '1px solid #2874A6',
        boxShadow: 'none',
        fontSize: '14px'
    }),
    option: (provided, state) => ({
        ...provided,
        // border: '1px solid #2874A6',
        fontSize: '14px'
    })
}
class AddView extends Component{
    constructor(){
        super()
        this.state = {
            name: '',
            address: '',
            crossroad: '',
        }
        this.onChange = this.onChange.bind(this)
        this.addView = this.addView.bind(this)
        this.onSelectChange = this.onSelectChange.bind(this)
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSelectChange(crossroad){
        console.log('change')
        if(crossroad && crossroad !== null && crossroad !== 'undefined'){
            this.setState({
                crossroad: crossroad.value
            })    
        }else{
            this.setState({
                crossroad: ''
            })
        }
    }

    addView(e){
        e.preventDefault()
        console.log(this.state)
        this.props.dispatch(addView(this.state))
    }

    render(){
        const { isOpen, errors, isProcessing } = this.props
        const crossroadOptions = this.props.crossroads.map( crossroad => {
            return {
                value: crossroad._id,
                label: crossroad.name
            }
        })

        return(
            <Modal isOpen={isOpen} style={customStyles} title="ADD VIEW">
                <form autoComplete="off">
                    <div className="CenticModal_Body">
                        <div className="form-group">
                            <label className="control-label">View Name</label>
                            <TextInput name="name" placeholder="View Name" type="text" onChange={this.onChange} error="" />
                        </div>
                        <div className="form-group">
                            <label className="control-label">View Address</label>
                            <TextInput name="address" placeholder="View Address" type="text" onChange={this.onChange} error="" />
                        </div>
                        <div className="form-group ">
                            <label className="control-label">Crossroad</label>
                            <Select name="crossroad" isClearable={true} options={crossroadOptions} styles={selectStyles} onChange={this.onSelectChange}></Select>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Latitude</label>
                            <TextInput name="lat" placeholder="Address" type="number" onChange={this.onChange} error=""/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Longitude</label>
                            <TextInput name="long" placeholder="Address" type="number" onChange={this.onChange} error=""/>
                        </div>
                    </div>
                    <div className="CenticModal_Footer">
                        <div className="text-right">
                            <button className="btn btn-save" disabled={isProcessing ? true : false } onClick={this.addView}>
                                {isProcessing ? <FontAwesomeIcon icon={faCircleNotch} spin /> : 'Add'}
                            </button>
                        </div>
                    </div>
                </form>
            </Modal>
        )
    }

}

const mapStateToProps = ({crossroads}) => {
    return {
        crossroads: crossroads.crossroads.map(crossroad => {
            return _.pick(crossroad, ['_id', 'name'])
        })
    }
}

export default connect(mapStateToProps)(AddView)

