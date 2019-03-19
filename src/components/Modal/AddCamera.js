import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch  } from '@fortawesome/free-solid-svg-icons'
import TextInput from '../TextInput'
import Modal from './Modal'
import Select from 'react-select'
import Switch from '@material-ui/core/Switch'
import * as CameraActions from '../../actions/action_camera'
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import GoogleMapReact from 'google-map-react';
import {isEmpty} from 'lodash'
import _ from 'lodash'

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, .7)',
        zIndex: '5'
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

const styles = theme => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing.unit,
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
});

const modeOptions = [
    { value: 'Surveillance', label: 'Surveillance' },
    { value: 'Record', label: 'Record' },
    { value: 'Stream', label: 'Stream' },
    { value: 'ALPR', label: 'ALPR' },
]

let provinceOptions = []
let districtOptions = []
let communeOptions = []

class AddCamera extends Component{
    constructor(){
        super()
        this.state = {
            activeStep: 0,
            ip: '10.49.34.236',
            port: '',
            cam_user: 'admin',
            cam_pass: 'centic.vn',
            infomation: {},
            name: 'Cam 236',
            modes: [],
            province: '',
            district: '',
            commune: '',
            hamlet: 'Ba Đình 1',
            street: 'Cách Mạng Tháng Tám',
            crossroad: '',
            position: 'Số 1',
            status: true,
            record_file_duration: 15,
            max_keep_days: 30,
            resolution: '',
            fps: '',
            bitrate: '',
            errors: {
                ip: '',
                port: '',
                cam_user: '',
                cam_pass: '',
                name: '',
                modes: '',
                province: '',
                district: '',
                commune: '',
                hamlet: '',
                street: '',
                crossroad: '',
                position: '',
                status: '',
                record_file_duration: '',
                max_keep_days: '',
                resolution: '',
                fps: '',
                bitrate: '',
            }
        }
    }

    static defaultProps = {
        center: {
            lat: 16.055139,
            lng: 108.220064
        },
        zoom: 14
    };

    componentWillReceiveProps(nextProps){
        this.setState({activeStep: nextProps.activeStep, errors: {...nextProps.errors}})
        if(!isEmpty(nextProps.configs)){
            this.setState({
                resolution: nextProps.configs.resolution,
                bitrate: nextProps.configs.bitrate,
                fps: nextProps.configs.framerate,
                infomation: nextProps.configs.information
            })
        }
    }

    handleBack = () => {
        this.props.dispatch(CameraActions.backStep())
    }
    checkAuth(){
        const { ip, port, cam_user, cam_pass } = this.state
        this.props.dispatch(CameraActions.checkCameraAuth({ip, port, cam_user, cam_pass}))
    }
    checkLocation(){
        const { province,  district, commune, hamlet, street, crossroad, position } = this.state
        this.props.dispatch(CameraActions.checkCameraLocation({province,  district, commune, hamlet, street, crossroad, position}))
    }
    checkCameraIdentity = () => {
        const { name, modes } = this.state
        this.props.dispatch(CameraActions.checkCameraIdentity({name, modes}))
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value, errors: { ...this.state.errors, [e.target.name]: ''}},)
    }

    onProvinceChange(province){
        if(province && province !== null && province !== 'undefined'){            
            this.setState({
                province: province,
                district: '',
                commune: '',
                errors: { ...this.state.errors, province: ''}
            })
            this.props.dispatch(CameraActions.loadDistrict(province.value))
        }else{
            this.setState({
                province: ''
            })
        }
    }
    onDistrictChange(district){
        if(district && district !== null && district !== 'undefined'){     
            this.setState({
                district: district,
                commune: '',
                errors: { ...this.state.errors, district: ''}
            })
            this.props.dispatch(CameraActions.loadCommune(district.value))
            
        }else{
            this.setState({
                district: ''
            })
        }
    }
    onCommuneChange(commune){
        if(commune && commune !== null && commune !== 'undefined'){
            this.setState({
                commune: commune,
                errors: { ...this.state.errors, commune: ''}
            })
        }else{
            this.setState({
                commune: ''
            })
        }
    }
    //DRY
    onModesChange(modes){
        if(modes && modes !== null && modes !== 'undefined'){
            this.setState({
                modes: modes.map(mode => {
                    return mode
                }),
                errors: { ...this.state.errors, modes: ''}
            })
        }else{
            this.setState({
                modes: []
            })
        }
    }
    //DRY
    onResolutionChange(resolution){
        if(resolution && resolution !== null && resolution !== 'undefined'){
            this.setState({
                resolution: resolution
            })
        }else{
            this.setState({
                resolution: ''
            })
        }
    }
    handleSwitch = name => event => {
        this.setState({ [name]: event.target.checked });
    }
    checkConfigs(e){
        e.preventDefault()
        const data = _.omit(this.state, ['activeStep', 'errors'])
        this.props.dispatch(CameraActions.checkCameraConfigs(data))
    }
    render(){
        const { classes, isProcessing, isOpen, modalType, configs, provinces, districts, communes, errors } = this.props
        const resolutionAvailable = configs.resolution_available
        console.log(resolutionAvailable)
        const { activeStep } = this.state
        if(!isEmpty(provinces)){
            provinceOptions = provinces.map(province => {
                return {value: province.province_code, label: province.name }
            })
        }
        if(!isEmpty(districts)){
            districtOptions = districts.map(district => {
                return {value: district.district_code, label: district.name }
            })
        }
        if(!isEmpty(communes)){
            communeOptions = communes.map(commune => {
                return {value: commune.commune_code, label: commune.name }
            })
        }
        return(
            <Modal isOpen={isOpen} style={customStyles} title="THÊM CAMERA" modalType={modalType}>
                <div className="CenticModal_Body">
                    <Stepper activeStep={activeStep} orientation="vertical">
                        <Step>
                            <StepLabel>Kết nối camera</StepLabel>
                            <StepContent>
                                <div className="form-group">
                                    <label className="control-label">Địa chỉ IP(*)</label>
                                    <TextInput name="ip" placeholder="Nhập địa chỉ IP" type="text" onChange={this.onChange} value={this.state.ip} error={errors.ip !== '' ? errors.ip : ''}/>
                                </div>
                                <div className="form-group">
                                    <label className="control-label">Port</label>
                                    <TextInput name="port" placeholder="80" type="number" onChange={this.onChange} value={this.state.port} error={errors.port}/>
                                </div>
                                <div className="form-group">
                                    <label className="control-label">Tên đăng nhập của camera(*)</label>
                                    <TextInput name="cam_user" placeholder="Nhập Tên đăng nhập của camera" type="text" onChange={this.onChange} value={this.state.cam_user} error={errors.cam_user}/>
                                </div>
                                <div className="form-group">
                                    <label className="control-label">Mật khẩu của camera(*)</label>
                                    <TextInput name="cam_pass" placeholder="Nhập Mật khẩu của camera" type="text" onChange={this.onChange} value={this.state.cam_pass} error={errors.cam_pass}/>
                                </div>
                                <div style={{height:'400px', width: '100%'}}>
                                    <GoogleMapReact
                                        bootstrapURLKeys={{ key: 'AIzaSyDb5xOZiLOJAtKJWj4spvQf3UEQvE-3sc4' }}
                                        defaultCenter={this.props.center}
                                        defaultZoom={this.props.zoom}
                                    ></GoogleMapReact>
                                </div>
                                <div className={classes.actionsContainer}>
                                    <div>
                                        <Button disabled={activeStep === 0} onClick={this.handleBack} className={classes.button}>
                                            TRỞ LẠI
                                        </Button>
                                        <Button variant="contained" color="primary" disabled={isProcessing} onClick={this.checkAuth} className={classes.button}>
                                            {isProcessing ? <FontAwesomeIcon icon={faCircleNotch} spin /> : 'Tiếp theo'}
                                        </Button>
                                    </div>
                                </div>
                            </StepContent>
                        </Step>
                        <Step>
                            <StepLabel>Vị trí</StepLabel>
                            <StepContent>
                                <div className="form-group">
                                    <label className="control-label">Tỉnh/Thành phố(*)</label>
                                    <Select name="province" placeholder="Tỉnh/Thành phố" options={provinceOptions} styles={selectStyles} onChange={this.onProvinceChange} value={this.state.province}/>
                                    { errors.province ? <div className="text-left invalid-feedback">{errors.province}</div> : null }
                                </div>
                                <div className="form-group">
                                    <label className="control-label">Quận/Huyện(*)</label>
                                    <Select name="district" isDisabled={isEmpty(configs.districts)} placeholder="Quận/Huyện" options={districtOptions} styles={selectStyles} onChange={this.onDistrictChange} value={isEmpty(configs.districts) ? '': this.state.district}/>
                                    { errors.district ? <div className="text-left invalid-feedback">{errors.district}</div> : null }
                                </div>
                                <div className="form-group">
                                    <label className="control-label">Xã/Phường(*)</label>
                                    <Select name="commune" isDisabled={isEmpty(configs.communes)} placeholder="Xã/Phường" options={communeOptions} styles={selectStyles} onChange={this.onCommuneChange} value={isEmpty(configs.districts)? '' : this.state.commune}/>
                                    { errors.commune ? <div className="text-left invalid-feedback">{errors.commune}</div> : null }
                                </div>
                                <div className="form-group">
                                    <label className="control-label">Thôn(Xóm)/Tổ dân phố(*)</label>
                                    <TextInput name="hamlet" placeholder="Thôn(Xóm)/Tổ dân phố" type="text" onChange={this.onChange} value={this.state.hamlet} error={errors.hamlet}/>
                                </div>
                                <div className="form-group">
                                    <label className="control-label">Đường(*)</label>
                                    <TextInput name="street" placeholder="Đường" type="text" onChange={this.onChange} value={this.state.street} error={errors.street}/>
                                </div>
                                <div className="form-group">
                                    <label className="control-label">Nút giao thông</label>
                                    <TextInput name="crossroad" placeholder="Nút giao thông" type="text" onChange={this.onChange} value={this.state.crossroad} error={errors.crossroad}/>
                                </div>
                                <div className="form-group">
                                    <label className="control-label">Vị trí lắp đặt(*)</label>
                                    <TextInput name="position" placeholder="Vị trí lặp đặt" type="text" onChange={this.onChange} value={this.state.position} error={errors.position}/>
                                </div>
                                
                                <div className={classes.actionsContainer}>
                                    <div>
                                        <Button disabled={activeStep === 0} onClick={this.handleBack} className={classes.button}>
                                            TRỞ LẠI
                                        </Button>
                                        <Button variant="contained" color="primary" onClick={this.checkLocation} className={classes.button}>
                                            {isProcessing ? <FontAwesomeIcon icon={faCircleNotch} spin /> : 'Tiếp theo'}
                                        </Button>
                                    </div>
                                </div>
                            </StepContent>
                        </Step>
                        <Step>
                            <StepLabel>Cấu hình và chức năng</StepLabel>
                            <StepContent>
                                <div className="form-group">
                                    <label className="control-label">Tên</label>
                                    <TextInput name="name" placeholder="Nhập tên camera" type="text" onChange={this.onChange} value={this.state.name} error={errors.name}/>
                                </div>
                                <div className="form-group">
                                    <label className="control-label">Chức năng</label>
                                    <Select name="modes" isClearable={true} isMulti placeholder="Modes" options={modeOptions} styles={selectStyles} 
                                        value={this.state.modes} onChange={this.onModesChange} />
                                    { errors.modes ? <div className="text-left invalid-feedback">{errors.modes}</div> : null }
                                </div>                                      
                                <div className="form-group">
                                    <label className="control-label">Trạng thái</label>
                                    <Switch checked={this.state.status} onChange={this.handleSwitch('status')} value="status" color="primary"/>
                                </div>
                                <div className="form-group">
                                    <label className="control-label">Thời gian file video (phút)</label>
                                    <TextInput name="record_file_duration" placeholder="Nhập tên camera" type="text" onChange={this.onChange} value={this.state.record_file_duration} error={errors.record_file_duration}/>
                                </div>
                                <div className="form-group">
                                    <label className="control-label">Thời gian lưu trữ file video (ngày)</label>
                                    <TextInput name="max_keep_days" placeholder="Thời gian lưu trữ file video" type="text" onChange={this.onChange} value={this.state.max_keep_days} error={errors.max_keep_days}/>
                                </div>
                                <div className="form-group">
                                    <label className="control-label">Độ phân giải</label>
                                    <Select name="mode" placeholder="Độ phân giải" options={resolutionAvailable} styles={selectStyles} 
                                    onChange={this.onResolutionChange} value={this.state.resolution}/>
                                    { errors.resolution ? <div className="text-left invalid-feedback">{errors.resolution}</div> : null }
                                </div>
                                <div className="form-group">
                                    <label className="control-label">Tốc độ Frame {!isEmpty(configs.frame_range) ? '( ' +  configs.frame_range.Min + '-' + configs.frame_range.Max + ' fps ) ': '' }</label>
                                    <TextInput name="fps" placeholder="Tốc độ Frame" type="number" onChange={this.onChange} value={this.state.fps}/>
                                </div>
                                <div className="form-group">
                                    <label className="control-label">Bitrate {!isEmpty(configs.bitrate_range) ? '( ' +  configs.bitrate_range.Min + '-' + configs.bitrate_range.Max + ' Kbps )': '' } </label>
                                    <TextInput name="bitrate" placeholder="Bitrate" type="number" onChange={this.onChange} value={this.state.bitrate}/>
                                </div>
                                <div className={classes.actionsContainer}>
                                    <div>
                                        <Button disabled={activeStep === 0} onClick={this.handleBack} className={classes.button}>
                                            TRỞ LẠI
                                        </Button>
                                        <Button variant="contained" disabled={isProcessing}  color="primary" onClick={this.checkConfigs} className={classes.button}>
                                            {/* {activeStep === steps.length - 1 ? 'Hoàn thành' : 'Tiếp theo'} */}
                                            {isProcessing ? <FontAwesomeIcon icon={faCircleNotch} spin /> : 'Hoàn thành'}
                                        </Button>
                                    </div>
                                </div>
                            </StepContent>
                        </Step>
                    </Stepper>
                </div>
            </Modal>
        )
    }
}

export default withStyles(AddCamera)