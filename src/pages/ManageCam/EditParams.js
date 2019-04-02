import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import {
  TextField,
  Button,
  Switch,
  InputAdornment
} from '@material-ui/core'
import { Scrollbars } from 'react-custom-scrollbars';
import Select from 'react-select'
import {
  CamModesControl,
  CamResolutionControl,
  QualityControl, 
  NoOptionsMessage
} from '../../components/Select/SelectControl'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    paddingLeft: 10
  },
  formContent: {
    flexGrow: 1,
  },
  formGroup: {
    marginTop: 20,
    marginRight: 10
  },
  actionButton: {
    textAlign: 'right',
    marginRight: 10,
    marginBottom: 5,
  },
  textField: {
    fontSize: '0.875rem',
  },
  inputAdornment:{
    fontSize: '0.875rem',
    whiteSpace: 'nowrap',
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
    padding: '2.5px 0 2.5px 6px',
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

class EditParams extends Component{
  onChange = name => event => {

  }
  changeSelect = name =>value => {

  }
  render(){
    const { classes } = this.props
    const resolutionOptions = [], qualityOptions = []
    
    return (
      <div className={classes.root}>
        <div className={classes.formContent}>
          <Scrollbars style={{width: '100%', height: '100%'}}>
            <div className={classes.formGroup}>
              <div className="form-group">
                <Select 
                  classes={classes}
                  components={{
                    Control: CamResolutionControl,
                    NoOptionsMessage: NoOptionsMessage
                  }}
                  options={resolutionOptions}
                  placeholder={false}
                  onChange={this.changeSelect('resolution')}
                  styles={selectStyles}
                  // error={!isEmpty(errors.resolution)}
                  // value={resolution}
                  // helperText={!isEmpty(errors.resolution) ? errors.resolution : ''}
                />
              </div>
              <div className="form-group">
                <Select
                  classes={classes}
                  components={{
                    Control: QualityControl,
                    NoOptionsMessage: NoOptionsMessage
                  }}
                  placeholder={false}
                  options={qualityOptions}
                  styles={selectStyles}
                  onChange={this.changeSelect('quality')}
                  // error={!isEmpty(errors.quality)}
                  // value={quality}
                  // helperText={!isEmpty(errors.quality) ? errors.quality : ''}
                />
              </div>
              <div className="form-group">
                <TextField 
                  label="FPS"
                  fullWidth
                  margin = "none"
                  type="number"
                  variant = "outlined"
                  InputLabelProps = {{
                    classes: {
                      root: classes.inputLabel
                    },
                  }}
                  InputProps = {{
                    inputProps: {
                      className: classes.inputProps
                    },
                    endAdornment: 
                      <InputAdornment position="end" className={classes.inputAdornment}>
                        {/* {addCamera.fps_range.Min} - {addCamera.fps_range.Max} */}
                      </InputAdornment>
                  }}
                  onChange={this.onChange('fps')}
                  className = { classes.textField }
                  // value={addCamera.fps}
                  // error={!isEmpty(errors.fps)}
                  // helperText={!isEmpty(errors.fps) ? errors.fps : ''}
                />
              </div>
              <div className="form-group">
                <TextField 
                    label="Bitrate (Kbps)"
                    fullWidth
                    margin = "none"
                    type="number"
                    variant = "outlined"
                    InputLabelProps = {{
                      classes: {
                        root: classes.inputLabel
                      },
                    }}
                    InputProps = {{
                      inputProps: {
                        className: classes.inputProps
                      },
                      endAdornment: 
                        <InputAdornment position="end" className={classes.inputAdornment}>
                          {/* {addCamera.bitrate_range.Min} - {addCamera.bitrate_range.Max} */}
                        </InputAdornment>,
                    }}
                    onChange={this.onChange('bitrate')}
                    className = { classes.textField }
                    // value={addCamera.bitrate}
                    // error={!isEmpty(errors.bitrate)}
                    // helperText={!isEmpty(errors.bitrate) ? errors.bitrate : ''}
                  />
              </div>
            </div>
          </Scrollbars>
        </div>
        <div className={classes.actionButton}>
          <Button 
            color="primary" 
            variant="contained"
            onClick={this.handleSubmit}
          >Lưu</Button>
        </div>
      </div>
    )
  }
}



export default connect()(withStyles(styles)(EditParams))