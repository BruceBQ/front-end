import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { TextField, Button, Switch, InputAdornment } from '@material-ui/core'
import { Scrollbars } from 'react-custom-scrollbars'
import _ from 'lodash'
import Select from 'react-select'
import {
  CamModesControl,
  CamResolutionControl,
  QualityControl,
  NoOptionsMessage,
} from '../../components/Select/SelectControl'

const styles = theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  formContent: {
    flexGrow: 1,
  },
  formGroup: {
    marginTop: 20,
    marginRight: 10,
  },
  actionButton: {
    textAlign: 'right',
    marginRight: 10,
    marginBottom: 5,
  },
  textField: {
    fontSize: '0.875rem',
  },
  inputAdornment: {
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
    marginRight: 10,
  },
})

const selectStyles = {
  menu: styles => {
    return {
      ...styles,
      zIndex: 2,
    }
  },
}
class EditParamsForm extends Component{
  _onInputChange = name => event => {
    event.persist()
    this.props.handleChange(event)
  }
  _onSelectChange = name => value => {
    this.props.setFieldValue(name, value, false)
  }
  
  render(){
    const { 
      classes,
      dirty,
      errors,
      currentParams = {},
      values,
      handleSubmit
    } =this.props
    let resolutionOptions = [],
      qualityOptions = [],
      fps_range, bitrate_range
    if(_.has(currentParams, 'resolution_range')){
      resolutionOptions = currentParams.resolution_range.map(r => ({
        value: r,
        label: r.width + 'x' + r.height
      }))
    }
    if(_.has(currentParams, 'quality_range')){
      qualityOptions = currentParams.quality_range
    }
    if(_.has(currentParams, 'fps_range')){
      fps_range = `${currentParams.fps_range.Min} - ${currentParams.fps_range.Max}`
    }
    if(_.has(currentParams, 'bitrate_range')){
      bitrate_range = `${currentParams.bitrate_range.Min} - ${currentParams.bitrate_range.Max}`
    }
    return (
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.formContent}>
        <Scrollbars style={{width: '100%', height: '100%'}}>
          <div className={classes.formGroup}>
            <div className="form-group">
              <Select 
                classes={classes}
                components={{
                  Control: CamResolutionControl,
                  NoOptionsMessage: NoOptionsMessage,
                }}
                options={resolutionOptions}
                placeholder={false}
                onChange={this._onSelectChange('resolution')}
                styles={selectStyles}
                error={!_.isEmpty(errors.resolution)}
                value={values.resolution}
                helperText={!_.isEmpty(errors.resolution) ? errors.resolution : ''}        
              />
            </div>
            <div className="form-group">
              <Select
                classes={classes}
                components={{
                  Control: QualityControl,
                  NoOptionsMessage: NoOptionsMessage,
                }}
                placeholder={false}
                options={qualityOptions}
                styles={selectStyles}
                onChange={this._onSelectChange('quality')}
                error={!_.isEmpty(errors.quality)}
                value={values.quality}
                helperText={!_.isEmpty(errors.quality) ? errors.quality : ''}
              />
            </div>
            <div className="form-group">
              <TextField
                label="FPS"
                name="fps"
                fullWidth
                margin="none"
                type="number"
                variant="outlined"
                InputLabelProps={{
                  classes: {
                    root: classes.inputLabel,
                  },
                }}
                InputProps={{
                  inputProps: {
                    className: classes.inputProps,
                  },
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      className={classes.inputAdornment}
                    >
                      {fps_range}
                    </InputAdornment>
                  ),
                }}
                onChange={this._onInputChange('fps')}
                className={classes.textField}
                defaultValue={values.fps}
                error={!_.isEmpty(errors.fps)}
                helperText={!_.isEmpty(errors.fps) ? errors.fps : ''}
              />
            </div>
            <div className="form-group">
              <TextField
                label="Bitrate (Kbps)"
                name="bitrate"
                fullWidth
                margin="none"
                type="number"
                variant="outlined"
                InputLabelProps={{
                  classes: {
                    root: classes.inputLabel,
                  },
                }}
                InputProps={{
                  inputProps: {
                    className: classes.inputProps,
                  },
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      className={classes.inputAdornment}
                    >
                      {bitrate_range}
                    </InputAdornment>
                  ),
                }}
                onChange={this._onInputChange('bitrate')}
                className={classes.textField}
                defaultValue={values.bitrate}
                error={!_.isEmpty(errors.bitrate)}
                helperText={!_.isEmpty(errors.bitrate) ? errors.bitrate : ''}
              />
            </div>
          </div>
        </Scrollbars>
        </div>
        <div className={classes.actionButton}>
          <Button
            type="submit"
            disabled={!dirty}
            color="primary"
            variant="contained"
            onClick={this.handleSubmit}
          >
            Lưu
          </Button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = ({cameras}) => ({
  errors: cameras.errors,
  focusedCam: cameras.focusedCam,
  editParamsData: cameras.editCam.params,
  currentParams: cameras.currentCam.params,

})

export default connect(mapStateToProps)(withStyles(styles)(EditParamsForm))