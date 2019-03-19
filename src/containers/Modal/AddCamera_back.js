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
import { addCamera, checkCameraAuth, checkCameraIdentity, checkCameraLocation } from '../../actions/action_camera'
import * as CameraActions from '../../actions/action_camera'
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {isEmpty} from 'lodash'
import GoogleMapReact from 'google-map-react';
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

function getSteps() {
    return ['Kết nối với camera','Vị trí', 'Cấu hình'];
}

const modeOptions = [
    { value: 'Surveillance', label: 'Surveillance' },
    { value: 'Record', label: 'Record' },
    { value: 'Stream', label: 'Stream' },
    { value: 'ALPR', label: 'ALPR' },
]

let provinceOptions = []
let districtOptions = []
let communeOptions = []
let markers = []
class AddCamera extends Component{
    constructor(props){

        super(props)
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
            enabled: true,
            record_file_duration: 15,
            max_keep_days: 30,
            resolution: '',
            fps: '',
            bitrate: '',
            lat: null,
            lng: null,
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
                enabled: '',
                record_file_duration: '',
                max_keep_days: '',
                resolution: '',
                fps: '',
                bitrate: '',
            }
        }
        this.onChange = this.onChange.bind(this)
        this.onProvinceChange = this.onProvinceChange.bind(this)
        this.onDistrictChange = this.onDistrictChange.bind(this)
        this.onCommuneChange = this.onCommuneChange.bind(this)
        this.onModesChange = this.onModesChange.bind(this)
        this.onResolutionChange = this.onResolutionChange.bind(this)
        this.handleSwitch = this.handleSwitch.bind(this)
        this.checkConfigs = this.checkConfigs.bind(this)
        this.checkAuth = this.checkAuth.bind(this)
        this.checkLocation = this.checkLocation.bind(this)
    }

    static defaultProps = {
        center: {
            lat: 16.055139,
            lng: 108.220064
        },
        zoom: 14
    };

    componentWillReceiveProps(nextProps){
        console.log(nextProps)
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
    handleNext = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));
    };
    
    handleBack = () => {
        this.props.dispatch(CameraActions.backStep())
    };
    
    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    checkAuth(){
        const { ip, port, cam_user, cam_pass } = this.state
        this.props.dispatch(checkCameraAuth({ip, port, cam_user, cam_pass}))
    }
    checkLocation(){
        const { province,  district, commune, hamlet, street, crossroad, position } = this.state
        this.props.dispatch(checkCameraLocation({province,  district, commune, hamlet, street, crossroad, position}))
    }
    checkCameraIdentity = () => {
        const { name, modes } = this.state
        this.props.dispatch(checkCameraIdentity({name, modes}))
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

    onInputChange(value){
        console.log(value)
    }

    findPosition = (obj) => {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
        markers = [];
        this.setState({
            lat: obj.lat,
            lng: obj.lng
        })
        
        let marker = new window.google.maps.Marker({
            position:{
                lat: obj.lat,
                lng: obj.lng
            },
            center: {
                lat: obj.lat,
                lng: obj.lng
            },
        })
        marker.setMap(this.refs.map.map_)
        markers.push(marker);
    }
    renderMarkers = (map, maps) => {
        let marker = new maps.Marker({
            position:{
                lat: 16.055139,
                lng: 108.220064
            },
            map,
            title: 'VIETBQ'
        })
    }

    render(){
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;
        const { isProcessing, isOpen, modalType, configs, provinces, districts, communes, errors } = this.props
        const resolutionAvailable = configs.resolution_available
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
                <form autoComplete="off">
                    <div className="CenticModal_Body">
                        <div className={classes.root}>
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
                                        <div style={{height:'500px', width: '100%', marginBottom: '20px'}} id="map">
                                            <GoogleMapReact
                                                ref="map"
                                                bootstrapURLKeys={{ key: 'AIzaSyDb5xOZiLOJAtKJWj4spvQf3UEQvE-3sc4' }}
                                                defaultCenter={this.props.center}
                                                defaultZoom={this.props.zoom}
                                                onClick={this.findPosition}
                                            ></GoogleMapReact>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Tỉnh/Thành phố(*)</label>
                                            <Select name="province" placeholder="Tỉnh/Thành phố" options={provinceOptions} styles={selectStyles} onChange={this.onProvinceChange} value={this.state.province}/>
                                            { errors.province ? <div className="text-left invalid-feedback">{errors.province}</div> : null }
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Quận/Huyện(*)</label>
                                            <Select name="district" isDisabled={isEmpty(districts)} placeholder="Quận/Huyện" options={districtOptions} styles={selectStyles} onChange={this.onDistrictChange} value={isEmpty(districts) ? '': this.state.district}/>
                                            { errors.district ? <div className="text-left invalid-feedback">{errors.district}</div> : null }
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Xã/Phường(*)</label>
                                            <Select name="commune" isDisabled={isEmpty(communes)} placeholder="Xã/Phường" options={communeOptions} styles={selectStyles} onChange={this.onCommuneChange} value={isEmpty(districts)? '' : this.state.commune}/>
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
                                            <label className="control-label">Ngã tư</label>
                                            <TextInput name="crossroad" placeholder="Ngã tư" type="text" onChange={this.onChange} value={this.state.crossroad} error={errors.crossroad}/>
                                        </div>
                                        {/* <div className="form-group">
                                            <label className="control-label">Vị trí lắp đặt(*)</label>
                                            <TextInput name="position" placeholder="Vị trí lặp đặt" type="text" onChange={this.onChange} value={this.state.position} error={errors.position}/>
                                        </div> */}
                                        
                                        <div className="form-group">
                                            <label className="control-label">Vị trí lắp đặt(*)</label>
                                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                                <TextInput name="lat" placeholder="Latitude" type="number" disabled onChange={this.onChange} value={this.state.lat} error={errors.position}/>    
                                                <TextInput name="lng" placeholder="Longitude" type="number" disabled onChange={this.onChange} value={this.state.lng} error={errors.position}/>
                                            </div>
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
                                            <Switch checked={this.state.enabled} onChange={this.handleSwitch('enabled')} color="primary"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Thời gian file video (phút)</label>
                                            <TextInput name="record_file_duration" placeholder="Nhập tên camera" type="text" onChange={this.onChange} value={this.state.record_file_duration} error={errors.record_file_duration}/>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Thời gian lưu trữ file video (ngày)</label>
                                            <TextInput name="max_keep_days" placeholder="" type="text" onChange={this.onChange} value={this.state.max_keep_days} error={errors.max_keep_days}/>
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
                    </div>
                </form>
            </Modal>
        )
    }
}


const mapStateToProps = ({views, cameras, crossroads}) => {
    return {
        isProcessing: cameras.isProcessing,
        errors: cameras.errors,
        configs: cameras.currentCamera.configs,
        provinces: cameras.currentCamera.provinces,
        districts: cameras.currentCamera.districts,
        communes: cameras.currentCamera.communes,
        // configs: cameras.checkCamera.data,
        // provinces: cameras.provinces,
        // districts: cameras.districts,
        // communes: cameras.communes,
        // activeStep: cameras.checkCamera.activeStep,
        activeStep: cameras.currentCamera.activeStep
    }
}

export default (connect(mapStateToProps)(withStyles(styles)(AddCamera)))
