import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Scrollbars } from 'react-custom-scrollbars';
import Select from 'react-select'
import Creatable from 'react-select/lib/Creatable';
import isEmpty from 'lodash/isEmpty'
import isEqual from 'lodash/isEqual'
import Loading from '../../components/Loading'
import TextInput from '../../components/TextInput'
import {
  ProvinceControl,
  DistrictControl,
  CommuneControl,
  GroupControl,
  NoOptionsMessage,
  Option
} from '../../components/Select/SelectControl'
import { 
  changeCamConnectionParams,
  editCamConnection
} from '../../actions/action_camera'
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
    height: '100%',
  },
  formContent: {
    height: 'auto',
    display: 'flex',
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
  formHelperText: {
    margin: '8px 12px 0',
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
    padding: '2.5px 0 2.5px 6px',
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

class EditConnect extends Component{
  
  onChange = name => event => {
    this.props.changeCamConnectionParams({
      [name]: event.target.value
    })
  }

  changeSelect = name => value => {
    this.props.changeCamConnectionParams({
      [name]: value
    })
  }

  handleSubmit = () => {
    const { id, editConnectionData } = this.props
    this.props.editCamConnection(id, editConnectionData)
  }

  render(){
    const { 
      classes,
      isFetching,
      errors = {},
      editConnectionData={},
      currentConnection={},
      provinceOptions = [],
      districtOptions = [],
      communeOptions = [],
      groupOptions = []
    } = this.props
    return (
      <div className={classes.root}>
      {isFetching ? <Loading /> :
        <form className={classes.form}>
          <div className={classes.formContent}>
            <Scrollbars style={{width: '100%', height: '100%'}}>
              <div className={classes.formGroup}>
                <div className="form-group">
                  <TextInput 
                    label="Tên camera"
                    fullWidth
                    onChange={this.onChange('name')}
                    value={editConnectionData.name}
                    error={!isEmpty(errors.name)}
                    helperText={!isEmpty(errors.name) ? errors.name : ''}
                  />
                </div>
                <div className="form-group">
                  <TextInput 
                    disabled
                    label="Vĩ độ"
                    type="number"
                    style={{
                      marginRight: 5,
                      width: 'calc(50% - 5px)'
                    }}
                    value={editConnectionData.lat}
                    error={!isEmpty(errors.lat)}
                    helperText={!isEmpty(errors.lat) ? errors.lat : ''}
                  />
                  <TextInput 
                    disabled
                    label="Kinh độ"
                    type="number"
                    style={{
                      marginLeft: 5,
                      width: 'calc(50% - 5px)'
                    }}
                    value={editConnectionData.lng}
                    error={!isEmpty(errors.lng)}
                    helperText={!isEmpty(errors.lng) ? errors.lng : ''}
                  />
                </div>
                <div className="form-group">
                  <Select
                    classes={classes}
                    components={{
                      Control: ProvinceControl,
                      NoOptionsMessage: NoOptionsMessage
                    }}
                    placeholder={false}
                    options={provinceOptions}
                    styles={selectStyles}
                    onChange={this.changeSelect('province')}
                    value={editConnectionData.province}
                    error={!isEmpty(errors.province)}
                    helperText={!isEmpty(errors.province) ? errors.province : ''}
                  />
                </div>
                <div className="form-group">
                  <Select
                    classes={classes}
                    components={{
                      Control: DistrictControl,
                      NoOptionsMessage: NoOptionsMessage
                    }}
                    placeholder={false}
                    options={districtOptions}
                    styles={selectStyles}
                    onChange={this.changeSelect('district')}
                    value={editConnectionData.district}
                    error={!isEmpty(errors.district)}
                    helperText={!isEmpty(errors.district) ? errors.district : ''}
                  />
                </div>
                <div className="form-group">
                  <Select
                    classes={classes}
                    components={{
                      Control: CommuneControl,
                      NoOptionsMessage: NoOptionsMessage
                    }}
                    placeholder={false}
                    options={communeOptions}
                    styles={selectStyles}
                    onChange={this.changeSelect('commune')}
                    value={editConnectionData.commune}
                    error={!isEmpty(errors.commune)}
                    helperText={!isEmpty(errors.commune) ? errors.commune : ''}
                  />
                </div>
                <div className="form-group">
                  <Creatable
                    classes={classes}
                    components={{
                      Control: GroupControl,
                      NoOptionsMessage: NoOptionsMessage
                    }}
                    isMulti
                    formatCreateLabel={(inputValue) => `Tạo mới "${inputValue}"`}
                    placeholder={false}
                    options={groupOptions}
                    styles={selectStyles}
                    onChange={this.changeSelect('group')}
                    value={editConnectionData.group}
                    error={!isEmpty(errors.group)}
                    helperText={!isEmpty(errors.group) ? errors.group : ''}
                  />
                </div>
                <div className="form-group">
                  <TextInput
                    label="Địa chỉ IP"
                    onChange={this.onChange('ip')}
                    style={{
                      marginRight: 5,
                      width: 'calc(50% - 5px)'
                    }}
                    value={editConnectionData.ip}
                    error={!isEmpty(errors.ip)}
                    helperText={!isEmpty(errors.ip) ? errors.ip : ''}
                  />
                  <TextInput
                    label="Port"
                    type="number"
                    onChange={this.onChange('port')}
                    className={classes.textField}
                    style={{
                      marginLeft: 5,
                      width: 'calc(50% - 5px)'
                    }}
                    value={editConnectionData.port}
                    error={!isEmpty(errors.port)}
                    helperText={!isEmpty(errors.port) ? errors.port : ''}
                  />

                </div>
                <div className="form-group">
                  <TextInput
                    label="Tên đăng nhập"
                    fullWidth
                    onChange={this.onChange('cam_user')}
                    value={editConnectionData.cam_user}
                    error={!isEmpty(errors.cam_user)}
                    helperText={!isEmpty(errors.cam_user) ? errors.cam_user : ''}
                  />
                </div>
                <div className="form-group">
                  <TextInput
                    label="Mật khẩu"
                    fullWidth
                    onChange={this.onChange('cam_pass')}
                    value={editConnectionData.cam_pass}
                    error={!isEmpty(errors.cam_pass)}
                    helperText={!isEmpty(errors.cam_pass) ? errors.cam_pass : ''}
                  />
                </div>
              </div>
            </Scrollbars>
          </div>
          <div className={classes.actionButton}>
            <Button
              disabled={isEqual(editConnectionData, currentConnection)}
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
            >
              Lưu
            </Button>
          </div>
        </form>
      }
      </div>  
    )
  }
}

const mapStateToProps = ({cameras, political}) => ({
  isFetching: cameras.isFetching,
  errors: cameras.errors,
  editConnectionData: cameras.editCam.connection,
  id: cameras.currentCam.id,
  currentConnection: cameras.currentCam.connection,
  provinceOptions: political.provinces,
  districtOptions: political.districts,
  communeOptions: political.communes,
  groupOptions: political.groups
})

export default connect(mapStateToProps, {
  changeCamConnectionParams: changeCamConnectionParams,
  editCamConnection: editCamConnection,
})(withStyles(styles)(EditConnect))
