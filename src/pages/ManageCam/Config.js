import React, { Component } from 'react';
import {
    TextField,
    Button,
    Switch,
    Tooltip
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Select from 'react-select'
import { withStyles } from '@material-ui/core/styles'
import {
    CamModesControl,
    CamResolutionControl
} from './SelectControl'

const styles = theme => ({
    root: {
        marginRight: 10,
        marginTop: 10,
    },
    textField: {
        fontSize: '0.875rem',
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
        padding: '2.5px 14px',
    },
    action: {
        textAlign: 'right'
    },
    button: {
        marginRight: 10
    }
})

const selectStyles = {
    menu: (styles) => {
        return {
            ...styles,
            zIndex: 2
        }
    }
}

const modeOptions = [
    { value: 'Surveillance', label: 'Surveillance' },
    { value: 'Record', label: 'Record' },
    { value: 'Stream', label: 'Stream' },
    { value: 'ALPR', label: 'ALPR' },
]

class Config extends Component{
    
    render(){
        const { classes } = this.props
        return(
            <div className={classes.root}>
                
                <div className="form-group">
                    <Select 
                        classes={classes}
                        components={{
                            Control: CamModesControl
                        }}
                        isClearable
                        options={modeOptions}
                        placeholder={false}
                        styles={selectStyles}
                        isMulti
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">Trạng thái</label>
                    <Switch 
                        // checked={this.state.status} 
                        // onChange={this.handleSwitch('status')} 
                        value="status" 
                        color="primary"
                    />
                </div>
                <div className="form-group">
                    <Select 
                        classes={classes}
                        components={{
                            Control: CamResolutionControl
                        }}
                        isClearable
                        options={modeOptions}
                        placeholder={false}
                        styles={selectStyles}
                    />
                </div>
                <div className="form-group">
                    <TextField 
                        label="Tốc độ frame (FPS)"
                        margin="none"
                        variant="outlined"
                        type="search"
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
                        className={classes.textField}    
                    />
                </div>
                <div className="form-group">
                    <TextField 
                        label="Bitrate (Kbps)"
                        margin="none"
                        variant="outlined"
                        type="number"
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
                        className={classes.textField}    
                    />
                </div>
                <div className="form-group">
                    <TextField 
                        label="Độ dài file video (phút)"
                        margin="none"
                        variant="outlined"
                        type="number"
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
                        className={classes.textField}    
                    />
                </div>
                <div className="form-group">
                    <TextField 
                        label="Thời gian lưu trữ file video (ngày)"
                        margin="none"
                        variant="outlined"
                        type="number"
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
                        className={classes.textField}    
                    />
                </div>
                <div className={classes.action}>
                    <Button variant="contained" color="default" className={classes.button}>Quay lại</Button>
                    <Button color="primary" variant="contained">Thêm</Button>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Config)