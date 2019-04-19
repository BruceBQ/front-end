import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'

const styles = theme => ({

})

class VehicleItem extends Component{
  render(){
    return(
      <Card></Card>
    )
  }
}

export default withStyles(styles)(VehicleItem)