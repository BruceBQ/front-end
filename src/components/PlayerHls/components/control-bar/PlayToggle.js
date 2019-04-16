import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import PlayArrow from '@material-ui/icons/PlayArrow'
import Pause from '@material-ui/icons/Pause'
import TooltipWrapper from '../../../TooltipWrapper'

class PlayToggle extends Component {
  _onClick = () => {
    const { player, video } = this.props
    console.log(video.current.video)
    if (player.paused) {
      // video.current.play()
    }else {
      // video.current.pause()
    }
  }
  render() {
    const { player } = this.props
    const controlText = player.paused ? 'Phát' : 'Dừng'
    return (
      <TooltipWrapper placement="top-start" title={controlText}>
        <button
          className="control-button"
          type="button"
          onClick={this._onClick}
        >
          {player.paused ? (
            <PlayArrow className="control-button__icon" />
          ) : (
            <Pause className="control-button__icon" />
          )}
        </button>
      </TooltipWrapper>
    )
  }
}

const mapStateToProps = ({ player }) => ({
  player: player,
})

export default connect(mapStateToProps)(PlayToggle)
