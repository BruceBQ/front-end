import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Fullscreen from '@material-ui/icons/Fullscreen'
import FullscreenExit from '@material-ui/icons/FullscreenExit'
import TooltipWrapper from '../../../TooltipWrapper'
import { toggleFullscreen } from '../../actions/player'
import classNames from 'classnames'

class FullscreenToggle extends Component {
  _onClick = () => {
    const {
      player,
      rootElement
    } = this.props
    this.props.toggleFullscreen(player, rootElement.current)
  }

  render() {
    const { player } = this.props
    const titleText = player.isFullscreen
      ? 'Thoát khỏi toàn màn hinh'
      : 'Toàn màn hình'
    return (
      <TooltipWrapper placement="top-end" title={titleText}>
        <button
          className="control-button"
          onClick={this._onClick}
          type="button"
        >
          {player.isFullscreen ? (
            <FullscreenExit className="control-button__icon" />
          ) : (
            <Fullscreen className="control-button__icon" />
          )}
        </button>
      </TooltipWrapper>
    )
  }
}
const mapStateToProps = ({ player }) => ({
  player: player,
})

export default connect(
  mapStateToProps,
  {
    toggleFullscreen: toggleFullscreen,
  },
)(FullscreenToggle)
