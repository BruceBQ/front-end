import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import { Scrollbars } from 'react-custom-scrollbars';
import {
  configFunctions, 
  backStep 
} from '../../actions/action_camera'
import Enabled from './Enabled'
import Record from './Record'
import Surveillance from './Surveillance'
import Stream from './Stream'
import ALPR from './ALPR'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  formContent: {
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
  panelSummary: {
    paddingLeft: 0
  },
  button: {
    marginRight: 10
  }
})

const modeOptions = [
  { value: 'Surveillance', label: 'Surveillance' },
  { value: 'Record', label: 'Record' },
  { value: 'Stream', label: 'Stream' },
  { value: 'ALPR', label: 'ALPR' },
]
class Function extends Component{

  changeSwitch = name => event => {
    event.stopPropagation()
  }

  handleSubmit = event => {
    console.log('submit functions')
    const {
      id,
      // enabled,
      record,
      record_file_duration,
      record_max_keep_days,
      stream,
      surveillance,
      alpr,
    } = this.props.addCamera
    this.props.configFunctions({
      id,
      // enabled,
      record,
      record_file_duration,
      record_max_keep_days,
      stream,
      surveillance,
      alpr
    })
  }

  handleBackStep = event => {
    this.props.backStep()
  }

  render(){
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.formContent}>
          <Scrollbars style={{width: '100%', height: '100%'}}>
            <div className={classes.formGroup}>
              {/* <Enabled /> */}
              <Record />
              <Surveillance />
              <Stream />
              <ALPR />
            </div>
          </Scrollbars>
        </div>
        <div className={classes.actionButton}>
        <Button 
          variant="contained" 
          color="default" 
          className={classes.button}
          onClick={this.handleBackStep}
        >Quay lại</Button>
        <Button 
          color="primary" 
          variant="contained"
          onClick={this.handleSubmit}
        >Hoàn thành</Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({cameras}) => ({
  addCamera: cameras.addCamera
})

export default connect(mapStateToProps, {
  backStep: backStep,
  configFunctions: configFunctions
})(withStyles(styles)(Function))

