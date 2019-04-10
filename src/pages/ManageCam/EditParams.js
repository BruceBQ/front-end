import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { TextField, Button, Switch, InputAdornment } from '@material-ui/core'
import { Formik} from 'formik'
import { Scrollbars } from 'react-custom-scrollbars'
import _ from 'lodash'
import Select from 'react-select'
import {
  CamModesControl,
  CamResolutionControl,
  QualityControl,
  NoOptionsMessage,
} from '../../components/Select/SelectControl'
import { getCamParams, editCamParams } from '../../actions/action_camera'
import Loading from '../../components/Loading';
import EditParamsForm from './EditParamsForm'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    paddingLeft: 10,
  },
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

class EditParams extends Component {
  state = { 

  }

  componentDidMount() {
    const { focusedCam } = this.props
    this.props.getCamParams(focusedCam)
  }

  onChange = name => event => {

  }

  changeSelect = name => value => {}

  handleSubmit = (values) => {
    const{ focusedCam } = this.props
    console.log(this.props)
    this.props.editCamParams(focusedCam, values)
  }

  render() {
    const { 
      classes,
      isFetching,
      editParamsData = {},
      currentParams = {},
      errors = {}
    } = this.props
    let resolutionOptions = [],
      qualityOptions = [],
      fps_range, bitrate_range,
      resolution = {},
      quality = {}
       
    if(_.has(currentParams, 'resolution_range')){
      resolutionOptions = currentParams.resolution_range.map(r => ({
        value: {
          width: Number(r.width),
          height: Number(r.height),
        },
        label: Number(r.width) + 'x' + Number(r.height)
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
    if(_.has(currentParams, 'resolution')){
      resolution = {
        value: currentParams.resolution,
        label: currentParams.resolution.width + 'x' + currentParams.resolution.height
      }
    }
    if(_.has(currentParams, 'quality')){
      quality = {
        value: currentParams.quality,
        label: currentParams.quality,
      }
    }
    return (
      <div className={classes.root}>
        <div className={classes.formContent}>
          {isFetching ? <Loading /> : 
            <Formik
              initialValues={{
                resolution,
                quality,
                fps: currentParams.fps,
                bitrate: currentParams.bitrate,
              }}
              onSubmit={values => this.handleSubmit(values)}
              render={(props) =>  <EditParamsForm {...props} />
              }
            />
          }
        </div>
      </div>
    )
  }
}


const mapStateToProps = ({cameras}) => ({
  isFetching: cameras.isFetching,
  focusedCam: cameras.focusedCam,
  editParamsData: cameras.editCam.params,
  currentParams: cameras.currentCam.params,
  errors: cameras.errors
})

export default connect(mapStateToProps, {
  getCamParams: getCamParams,
  editCamParams: editCamParams,
})(withStyles(styles)(EditParams))
