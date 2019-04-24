import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Typography from '@material-ui/core/Typography'
import { Formik } from 'formik'

import SearchForm from './SearchForm'
import TextInput from '../../components/TextInput'
import { searchVehicles, clearVehicles } from '../../actions/action_searchVehicles'

const styles = theme => ({
  root: {
    width: '100%',
    padding: '10px 6px 6px 6px',
  },
  heading: {},
})

class Search extends Component {
  componentDidMount() {
    const values = {
      q: '',
      start_day: new Date(),
      start_hour: new Date().setHours(0, 0, 0),
      end_day: new Date(),
      end_hour: new Date(),
    }
    
    this._onSubmit(values)
    
  }

  _onSubmit = values => {
    const { start_day, start_hour, end_day, end_hour } = values
    const start_time = new Date(
      new Date(start_day).getFullYear(),
      new Date(start_day).getMonth(),
      new Date(start_day).getDate(),
      new Date(start_hour).getHours(),
      new Date(start_hour).getMinutes(),
    )
    const end_time = new Date(
      new Date(end_day).getFullYear(),
      new Date(end_day).getMonth(),
      new Date(end_day).getDate(),
      new Date(end_hour).getHours(),
      new Date(end_hour).getMinutes(),
    )
    this.props.clearVehicles()
    this.props.searchVehicles({
      string: values.q,
      page: 1,
      start_time,
      end_time,
    })
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Formik
          initialValues={{
            q: '',
            start_day: new Date(),
            start_hour: new Date().setHours(0, 0, 0),
            end_day: new Date(),
            end_hour: new Date(),
          }}
          onSubmit={values => this._onSubmit(values)}
          render={props => <SearchForm {...props} />}
        />
      </div>
    )
  }
}

export default connect(
  null,
  {
    searchVehicles: searchVehicles,
    clearVehicles: clearVehicles
  },
)(withStyles(styles)(Search))
