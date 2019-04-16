import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
// import Player from '../../components/Player/components/Player'
import  { Player } from '../../components/PlayerHls'
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
  state = {}
  componentDidMount() {}

  renderRow = () => {
    console.log(this.props.cameras)
  }

  render() {
    // const { children } = this.renderRow()
    const { cameras } = this.props
    return (
      <div className="row-camera">
        {!isEmpty(cameras) &&
          cameras.map((camera, index) => (
            <WrapperPlayer key={index}>
              <Player streamURL={camera.stream_url} key={index} />
            </WrapperPlayer>
          ))}
      </div>
    )
  }
}

RowCamera.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(RowCamera)
