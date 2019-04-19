import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography'
import TextInput from '../../components/TextInput'

const styles = theme => ({
  root: {
    width: '100%',
    padding: '10px 6px 6px 6px',
  },
  heading: {

  }
})

class Search extends Component{
  render(){
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <div>
          <TextInput 
            type="search"
            fullWidth
            label="Nhập biển số phương tiện"
          />
        </div>
        
      </div>
    )
  }
}

export default withStyles(styles)(Search)