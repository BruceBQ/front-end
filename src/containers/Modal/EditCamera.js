import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch  } from '@fortawesome/free-solid-svg-icons'
import TextInput from '../../components/TextInput'
import Modal from '../../components/Modal/Modal'
import Select from 'react-select'
import makeAnimated from 'react-select/lib/animated';
import Switch from '@material-ui/core/Switch'
import { addCamera } from '../../actions/action_camera'

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



class AddCamera extends Component{
    constructor(){
        super()
        this.state = {
            name: '',
            ip: '',
            port: '',
            crossroad: '',
            cam_user: '',
            cam_pass: '',
            status: true,
            mode: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSelectChange = this.onSelectChange.bind(this)
        this.handleSwitch = this.handleSwitch.bind(this)
        this.addView = this.addView.bind(this)
    }
    componentDidMount(){
        console.log(this.props)
        this.setState({view: this.props.view_id})
        // this.setState({crossroad: this.props.match.params.crossroadI})
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value})
    }

    onSelectChange(mode){
        if(mode && mode !== null && mode !== 'undefined'){
            this.setState({
                mode: mode.value
            })
        }else{
            this.setState({
                mode: ''
            })
        }
    }

    handleSwitch = name => event => {
        this.setState({ [name]: event.target.checked });
    }

    addView(e){
        e.preventDefault()
        this.props.dispatch(addCamera(this.state))
    }

    render(){
        const { isProcessing, errors, isOpen } = this.props
        console.log(this.props.match)
        const modeOptions = [
            { value: 'Idle', label: 'Idle' },
            { value: 'Surveillance', label: 'Surveillance' },
            { value: 'Traffic', label: 'Traffic' },
        ]
        const cameraOptions = [
            { value: '1', label: 'Camera1 Camera1 Camera1 Camera1 Camera1 Camera1 Camera1 Camera1 Camera1 Camera1 '},
            { value: '2', label: 'Camera1 Camera1 '},
            { value: '3', label: 'Camera1 Camera1 Camera1 Camera1 '},
            { value: '4', label: 'Camera1 Camera1 Camera1 Camera1 Camera1 Camera1 Camera1 Camera1 Camera1 Camera1 '}
        ]
        return(
            <Modal isOpen={isOpen} style={customStyles} title="EDIT CAMERA">
                <form autoComplete="off">
                    <div className="CenticModal_Body">
                        <div className="form-group">
                            <label className="control-label">Name</label>
                            <TextInput name="name" placeholder="Camera Name" type="text" onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Group</label>
                            <Select name="mode" isClearable={true} isMulti options={cameraOptions} styles={selectStyles} onChange={this.onSelectChange} />
                        </div>
                        <div className="form-group">
                            <label className="control-label">IP Address</label>
                            <TextInput name="ip" placeholder="IP Address" type="text" onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Port</label>
                            <TextInput name="port" placeholder="80" type="number" onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Camera's Username</label>
                            <TextInput name="cam_user" placeholder="Camera's Username" type="text" onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Camera's Password</label>
                            <TextInput name="cam_pass" placeholder="Camera's Password" type="text" onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Status</label>
                            <Switch checked={this.state.status} onChange={this.handleSwitch('status')} value="status" color="primary"/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Width</label>
                            <TextInput name="width" placeholder="1280" type="number" onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Height</label>
                            <TextInput name="height" placeholder="720" type="number" onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Mode</label>
                            <Select name="mode" isClearable={true} options={modeOptions} styles={selectStyles} onChange={this.onSelectChange} />
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


const mapStateToProps = ({views, camera}) => ({
    view_id: views.currentView._id
})

export default withRouter(connect(mapStateToProps)(AddCamera))
