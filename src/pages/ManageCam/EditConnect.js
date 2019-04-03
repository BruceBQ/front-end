import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Scrollbars } from 'react-custom-scrollbars';
import Select from 'react-select'
import Creatable from 'react-select/lib/Creatable';
import { Formik } from 'formik'
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
  state = {
    connection: {}
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      ...nextProps.connection
    }
  }
  
  

  onChange = name => event => {
    event.persist()
    console.log(event.target.value)
    this.setState(state => ({
      
      [name]: event.target.value,
      
    }))
  }

  changeSelect = name => value => {

  }

  render(){
    const { 
      classes,
      isFetching,
      // errors = {},
      provinceOptions = [],
      districtOptions = [],
      communeOptions = [],
      groupOptions = []
    } = this.props
    const { connection }  = this.state
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
                        value={connection.name}
                        // error={!isEmpty(errors.name)}
                        // helperText={!isEmpty(errors.name) ? errors.name : ''}
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
                        value={connection.lat}
                        // error={!isEmpty(errors.lat)}
                        // helperText={!isEmpty(errors.lat) ? errors.lat : ''}
                      />
                      <TextInput 
                        disabled
                        label="Kinh độ"
                        type="number"
                        style={{
                          marginLeft: 5,
                          width: 'calc(50% - 5px)'
                        }}
                        value={connection.lng}
                        // error={!isEmpty(errors.lng)}
                        // helperText={!isEmpty(errors.lng) ? errors.lng : ''}
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
                        value={connection.province}
                        // error={!isEmpty(errors.province)}
                        // helperText={!isEmpty(errors.province) ? errors.province : ''}
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
                        value={connection.district}
                        // error={!isEmpty(errors.district)}
                        // helperText={!isEmpty(errors.district) ? errors.district : ''}
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
                        value={connection.commune}
                        // error={!isEmpty(errors.commune)}
                        // helperText={!isEmpty(errors.commune) ? errors.commune : ''}
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
                        value={connection.group}
                        // error={!isEmpty(errors.group)}
                        // helperText={!isEmpty(errors.group) ? errors.group : ''}
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
                        value={connection.ip}
                        // error={!isEmpty(errors.ip)}
                        // helperText={!isEmpty(errors.ip) ? errors.ip : ''}
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
                        value={connection.port}
                        // error={!isEmpty(errors.port)}
                        // helperText={!isEmpty(errors.port) ? errors.port : ''}
                      />

                    </div>
                    <div className="form-group">
                      <TextInput
                        label="Tên đăng nhập"
                        fullWidth
                        onChange={this.onChange('cam_user')}
                        value={connection.cam_user}
                        // error={!isEmpty(errors.cam_user)}
                        // helperText={!isEmpty(errors.cam_user) ? errors.cam_user : ''}
                      />
                    </div>
                    <div className="form-group">
                      <TextInput
                        label="Mật khẩu"
                        fullWidth
                        onChange={this.onChange('cam_pass')}
                        value={connection.cam_pass}
                        // error={!isEmpty(errors.cam_pass)}
                        // helperText={!isEmpty(errors.cam_pass) ? errors.cam_pass : ''}
                      />
                    </div>
                  </div>
                </Scrollbars>
              </div>
          <div className={classes.actionButton}>
            <Button
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
  connection: cameras.currentCam.connection,
  provinceOptions: political.provinces,
  districtOptions: political.districts,
  communeOptions: political.communes,
  groupOptions: political.groups
})

export default connect(mapStateToProps)(withStyles(styles)(EditConnect))
