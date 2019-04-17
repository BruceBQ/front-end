import React, { Component } from 'react'
import PlayArrow from '@material-ui/icons/PlayArrow'
import Pause from '@material-ui/icons/Pause'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

class PlayToggle extends Component {

  handleClick = e => {
    e.stopPropagation()
    this.props.handlePlayOrPause()
    this.props.handleNotLive()
    const { video, src } = this.props

    if (video.video.paused) {
      console.log('video is play 1')
      video.video.play()
      video.hls.attachMedia(video.video)
    } else {
      console.log('video is pause')

      video.video.pause()
      video.hls.stopLoad()
    
    }
  }
  render() {
    console.log(this.props)
    const { playerControl } = this.props
    const titleText = playerControl.paused ? 'Phát' : 'Dừng'
    return (
      <button
        className="control-button control-button__play"
        type="button"
        onClick={this._onClick}
      >
        {playerControl.paused ? (
          <PlayArrow className="control-button__icon" />
        ) : (
          <Pause className="control-button__icon" />
        )}
        <div className="title-tip">{titleText}</div>
      </button>
    )
  }
}

export default PlayToggle
