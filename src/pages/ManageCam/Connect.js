import React, { Component }  from 'react'
import { connect } from 'react-redux'
import {
    TextField,
    Button,
    Tooltip
} from '@material-ui/core'
import Select from 'react-select'
import Creatable from 'react-select/lib/Creatable';
import { withStyles } from '@material-ui/core/styles'
import { Scrollbars } from 'react-custom-scrollbars';
import { 
    changeCameraParams,
    activeAddCam,
    disabledAddCam,
    connectCamera
} from '../../actions/action_camera'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { getAllProvinces } from '../../actions/action_political'
import { createGroup } from '../../actions/action_group'
import {
    ProvinceControl,
    DistrictControl,
    CommuneControl,
    GroupControl
} from './SelectControl'

import { isEmpty } from 'lodash'

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    formControl: {
        flexGrow: 1,
    },
    formGroup: {
        marginTop: 10,
        marginRight: 10
    },
    actionButton: {
        textAlign: 'right',
        marginRight: 10,
        marginBottom: 5,
    },
    textField: {
        fontSize: '0.875rem',
        width: 'calc(50% - 5px)'
    },

    inputProps: {
        fontSize: '0.875rem',
        padding: '12px 14px',
    },
    inputLabel: {
        fontSize: '0.875rem',
        transform: 'translate(19px, 14px) scale(1)',
    },
    input: {
        display: 'flex',
        fontSize: '0.875rem',
        paddingTop: 2.5,
        paddingBottom: 2.5
    },
    
})

const selectStyles = {
    menu: (styles) => {
        return {
            ...styles,
            zIndex: 2
        }
    }
}

class Connect extends Component{
    state = {
        value: ''
    }
    componentWillUnmount(){
        this.props.disabledAddCam()
    }
    onChange = name => event => {
        this.props.changeCameraParams({[name]: event.target.value})
    }
    componentDidMount() {
        this.props.getAllProvinces()
        this.props.activeAddCam()
    }
    changeSelect = name => value => {
        this.props.changeCameraParams({[name]: value })
        // if(!isEmpty(value)){
        // }
    }

    handleClick = (e) => {
        console.log(this.props.camera)
        this.props.connectCamera(this.props.camera)
    }
    render(){
        const { 
            classes, 
            camera, 
            provinceOptions = [],
            districtOptions = [],
            communeOptions = []
        } = this.props
        return(
            <div className={classes.root}>
                <div className={classes.formControl}>
                    <Scrollbars style={{width: '100%', height: '100%'}}>
                        <div className={classes.formGroup}>
                            <div className="form-group">
                                <TextField 
                                    label="Tên camera"
                                    margin="none"
                                    variant="outlined"
                                    fullWidth
                                    InputLabelProps	={{
                                        classes: {
                                            root: classes.inputLabel
                                        },
                                    }}
                                    InputProps={{
                                        inputProps: {
                                            className: classes.inputProps
                                        }
                                    }}
                                    value={camera.name}
                                    onChange={this.onChange('name')}
                                />
                            </div>          
                            <div className="form-group">
                                <TextField 
                                    label="Vĩ độ"
                                    margin="none"
                                    variant="outlined"
                                    type="number"
                                    disabled
                                    InputLabelProps	={{
                                        classes: {
                                            root: classes.inputLabel
                                        },
                                    }}
                                    InputProps={{
                                        readOnly: true,
                                        inputProps: {
                                            className: classes.inputProps
                                        }
                                    }}
                                    value={camera.lat}
                                    className={classes.textField}
                                    style={{marginRight: 5}}
                                />
                                <TextField 
                                    label="Kinh độ"
                                    margin="none"
                                    variant="outlined"
                                    type="number"
                                    disabled
                                    InputLabelProps	={{
                                        classes: {
                                            root: classes.inputLabel
                                        },
                                    }}
                                    InputProps={{
                                        readOnly: true,
                                        inputProps: {
                                            className: classes.inputProps
                                        }
                                    }}
                                    value={camera.lng}
                                    className={classes.textField}
                                    style={{marginLeft: 5}}
                                />

                            </div>
                            <div className="form-group">
                                <Select
                                    classes={classes}
                                    components={{
                                        Control: ProvinceControl
                                    }}
                                    placeholder={false}
                                    options={provinceOptions}
                                    styles={selectStyles}
                                    onChange={this.changeSelect('province')}
                                    value={camera.province}
                                />
                            </div>
                            <div className="form-group">
                                <Select
                                    classes={classes}
                                    components={{
                                        Control: DistrictControl
                                    }}
                                    placeholder={false}
                                    options={districtOptions}
                                    styles={selectStyles}
                                    onChange={this.changeSelect('district')}
                                    value={camera.district}
                                />
                            </div>
                            <div className="form-group">
                                <Select
                                    classes={classes}
                                    components={{
                                        Control: CommuneControl
                                    }}
                                    placeholder={false}
                                    options={communeOptions}
                                    styles={selectStyles}
                                    onChange={this.changeSelect('commune')}
                                    value={camera.commune}
                                />
                            </div>
                            
                            <div className="form-group">
                                <Creatable
                                    classes={classes}
                                    components={{
                                        Control: GroupControl
                                    }}
                                    isMulti
                                    placeholder={false}
                                    options={provinceOptions}
                                    // menuIsOpen
                                    styles={selectStyles}
                                    onChange={this.changeSelect('group')}
                                    value={camera.group}
                                />
                            </div>
                            <div className="form-group">
                                <TextField 
                                    label="Địa chỉ IP"
                                    margin="none"
                                    variant="outlined"
                                    InputLabelProps	={{
                                        classes: {
                                            root: classes.inputLabel
                                        },
                                    }}
                                    InputProps={{
                                        inputProps: {
                                            className: classes.inputProps
                                        }
                                    }}
                                    value={camera.ip}
                                    className={classes.textField}
                                    onChange={this.onChange('ip')}
                                    style={{marginRight: 5}}
                                />
                                <TextField 
                                    label="Port"
                                    margin="none"
                                    variant="outlined"
                                    value={this.state.port}
                                    type="number"
                                    InputLabelProps	={{
                                        classes: {
                                            root: classes.inputLabel
                                        },
                                    }}
                                    InputProps={{
                                        inputProps: {
                                            className: classes.inputProps
                                        }
                                    }}
                                    value={camera.port}
                                    onChange={this.onChange('port')}
                                    className={classes.textField}
                                    style={{marginLeft: 5}}
                                />
                            </div>
                            <div className="form-group">
                                <TextField 
                                    label="Tên đăng nhập"
                                    margin="none"
                                    variant="outlined"
                                    fullWidth
                                    InputLabelProps	={{
                                        classes: {
                                            root: classes.inputLabel
                                        },
                                    }}
                                    InputProps={{
                                        inputProps: {
                                            className: classes.inputProps
                                        }
                                    }}
                                    value={camera.cam_user}
                                    onChange={this.onChange('cam_user')}
                                />
                            </div>
                            <div className="form-group">
                                <TextField 
                                    label="Mật khẩu"
                                    margin="none"
                                    variant="outlined"
                                    fullWidth
                                    InputLabelProps	={{
                                        classes: {
                                            root: classes.inputLabel
                                        },
                                    }}
                                    InputProps={{
                                        inputProps: {
                                            className: classes.inputProps
                                        }
                                    }}
                                    value={camera.cam_pass}
                                    onChange={this.onChange('cam_pass')}
                                />
                            </div>
                        </div>
                    </Scrollbars>
                </div>
                <div className={classes.actionButton}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleClick}
                    >
                        TIẾP THEO
                    </Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({cameras, political}) => ({
    camera: cameras.addCamera,
    provinceOptions: political.provinces,
    districtOptions: political.districts,
    communeOptions: political.communes,

})
export default connect(mapStateToProps, {
    getAllProvinces: getAllProvinces,
    activeAddCam: activeAddCam,
    disabledAddCam: disabledAddCam,
    changeCameraParams: changeCameraParams,
    createGroup: createGroup,
    connectCamera: connectCamera
})(withStyles(styles)(Connect))

