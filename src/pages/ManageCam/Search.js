import React, { Component } from 'react';
import { connect } from 'react-redux'
import classNames from 'classnames';
import TextInput from '../../components/TextInput'
import { TextField, Typography,Switch } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Select from 'react-select';
import { Scrollbars } from 'react-custom-scrollbars';
import { withStyles } from '@material-ui/core/styles';

import { 
  ProvinceControl, 
  DistrictControl,
  CommuneControl,
  CamStateControl,
  GroupControl,
  NoOptionsMessage
} from '../../components/Select/SelectControl'
import {
  getDataBeforeSearch,
} from '../../actions/action_manageCam'

import {
  changeSearchCamParams
} from '../../actions/action_search'

const state = [
  {
    label: 'Bình thường',
    value: '0'
  }
]
const styles = theme => ({
  root: {
    padding: '10px 10px',
    // flexGrow: '1',
    display: 'flex',
    flexDirection: 'column'
  },
  heading: {
    fontSize: '0.825rem',
    fontWeight: 500,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 12px'
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
    padding: '2.5px 0 2.5px 6px',
  },
});
const selectStyles = {
  menu: (styles) => {
    return {
      ...styles,
      zIndex: 2
    }
  }
}

class Search extends Component{
  componentDidMount(){
    this.props.getDataBeforeSearch()
  }

  handleInputChange = name => event => {
    this.props.changeSearchCamParams({[name]: event.target.value})
  }

  handleSwitchChange = name => value => {
    this.props.changeSearchCamParams({[name]: value})
  }

  render(){
    const { 
      classes, 
      theme,
      provinceOptions = [],
      districtOptions = [],
      communeOptions = [],
      groupOptions = [],
    } = this.props
    return(
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>LỌC</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <div className="form-group">
              <TextInput 
                fullWidth 
                label="Nhập từ khóa tìm kiếm" 
                type="search" 
                onChange={this.handleInputChange('string')}
              />
            </div>
            <div className="form-group">
              <Select 
                classes={classes}
                components={{
                  Control: ProvinceControl,
                  NoOptionsMessage: NoOptionsMessage
                }}
                isClearable
                options={provinceOptions}
                placeholder={false}
                styles={selectStyles}
                onChange={this.handleSwitchChange('province')}
              />
            </div>
            <div className="form-group">
              <Select 
                classes={classes}
                components={{
                  Control: DistrictControl,
                  NoOptionsMessage: NoOptionsMessage
                }}
                isClearable
                options={districtOptions}
                placeholder={false}
                isMulti
                styles={selectStyles}
                onChange={this.handleSwitchChange('district')}
              />
            </div>
            <div className="form-group">
              <Select 
                classes={classes}
                components={{
                  Control: CommuneControl,
                  NoOptionsMessage: NoOptionsMessage,
                }}
                isClearable
                isMulti
                options={communeOptions}
                placeholder={false}
                styles={selectStyles}
                onChange={this.handleSwitchChange('commune')}
              />
            </div>
            <div className="form-group">
              <Select 
                classes={classes}
                components={{
                  Control: GroupControl,
                  NoOptionsMessage: NoOptionsMessage
                }}
                isClearable
                isMulti
                options={groupOptions}
                placeholder={false}
                styles={selectStyles}
                onChange={this.handleSwitchChange('group')}
              />
            </div>
            <div className="form-group">
              <Select 
                classes={classes}
                components={{
                  Control: CamStateControl,
                  NoOptionsMessage: NoOptionsMessage
                }}
                isClearable
                options={state}
                placeholder={false}
                styles={selectStyles}
                onChange={this.handleSwitchChange('state_cam')}
              />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    )
  }
}

const mapStateToProps = ({political}) => ({
  provinceOptions: political.provinces,
  districtOptions: political.districts,
  communeOptions: political.communes,
  groupOptions: political.groups
})

export default connect(mapStateToProps, {
  getDataBeforeSearch: getDataBeforeSearch,
  changeSearchCamParams: changeSearchCamParams
})(withStyles(styles, {withTheme: true})(Search))