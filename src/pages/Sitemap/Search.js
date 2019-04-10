import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Select from 'react-select';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextInput from '../../components/TextInput'
import { 
  ProvinceControl, 
  DistrictControl,
  CommuneControl,
  CamStateControl,
  GroupControl,
  NoOptionsMessage
} from '../../components/Select/SelectControl'

const styles = theme => ({
  root: {

  }
})

class Search extends Component{
  render(){
    const {
      classes
    } =  this.props
    return (
      <div className={classes.root}>

      </div>
    )
  }
}

export default  connect()(withStyles(styles)(Search))