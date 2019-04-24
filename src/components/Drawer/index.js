import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'

import { toggleDrawer } from '../../actions/action_ui'

const styles = theme => ({
  drawer: {},
  root: {
    width: 300,
  },
})

class RightDrawer extends Component {
  render() {
    const { classes, open, toggleDrawer } = this.props
    return (
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
      >
        <div className={classes.root}>VIETBQ</div>
      </Drawer>
    )
  }
}

const mapStateToProps = ({ ui }) => ({
  open: ui.drawer,
})

export default connect(
  mapStateToProps,
  {
    toggleDrawer: toggleDrawer,
  },
)(withStyles(styles)(RightDrawer))
