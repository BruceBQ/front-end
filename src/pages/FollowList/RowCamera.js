import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Player from '../../components/Player/components/Player'
// import  { Player } from '../../components/PlayerHls'
import WrapperPlayer from './WrapperPlayer'
import { isEmpty } from 'lodash'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {},
  control: {
    padding: theme.spacing.unit * 2,
  },
})

class RowCamera extends Component {
  state = {

  }
  componentDidMount() {

  }

  renderRow = () => {
    
  }

  render() {
    
    const { cams = [] } = this.props
    return (
      <div className="row-camera">
          {cams.map((cam, index) => (
            <WrapperPlayer key={index}>
              <Player cam={cam} key={index} />
            </WrapperPlayer>
          ))}
      </div>
    )
  }
}


export default withStyles(styles)(RowCamera)
