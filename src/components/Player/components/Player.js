import React, { Component } from 'react'
import Video from './Video'
import ControlBar from './ControlBar'
import LoadingSpinner from './LoadingSpinner'
import PropTypes from 'prop-types'
import './player.scss'
import fullscreen from '../utils/fullscreen'
import Hls from 'hls.js'

class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showControls: false,
      paused: false,
      fullscreen: false,
      waiting: true,
    }
    this.controlHideTimer = null
    this.video = React.createRef()
    this.player = React.createRef()
  }

  static defaultProps = {
    aspectRatio: 'auto',
  }

  getBuffer = () => {
    for (let i = 0; i < this.video.video.buffered.length; i++) {
      console.log(
        i +
          ':' +
          '[' +
          this.video.video.buffered.start(i) +
          ' ' +
          this.video.video.buffered.end(i) +
          ']',
      )
    }
  }

  componentDidMount() {
    console.log(this.props.cam)
    window.addEventListener('resize', this.handleResize)
    fullscreen.addEventListener(this.handleFullScreenChange)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
    fullscreen.removeEventListener(this.handleFullScreenChange)
    if (this.controlsHideTimer) {
      window.clearTimeout(this.controlsHideTimer);
    }
  }

  handleResize = () => {}

  handleMouseDown = () => {}

  handleMouseMove = () => {
    this.startControlsTimer()
  }

  startControlsTimer = () => {
    this.setState({
      showControls: true
    })
    let controlBarActiveTime = 1000
    clearTimeout(this.controlHideTimer)
    this.controlHideTimer = setTimeout(() => {
      this.setState({
        showControls: false
      })
    }, controlBarActiveTime)
  }

  // handleMouseLeave = () => {
  //   this.setState({
  //     showControls: false,
  //   })
  // }

  handleFocus = () => {}

  handleBlur = () => {}

  handleFullScreenChange = () => {
    this.setState({
      fullscreen: !this.state.fullscreen,
    })
  }

  toggleFullScreen = () => {
    const player = this.player.current
    if (fullscreen.isFullscreen) {
      fullscreen.exit()
    } else {
      fullscreen.request(player)
    }
  }

  handlePlayOrPause = () => {
    this.setState({
      paused: !this.state.paused,
    })
  }

  handlePlaying = () => {
    this.setState({
      waiting: false,
      paused: false,
    })
  }
  handleWaiting = () => {
    this.setState({
      waiting: true,
      
    })
  }

  handleReload = () => {
    this.video.hls.on(Hls.Events.ERROR, (event, data) => {
      
    })
  }

  render() {
    const {
      cam
    } = this.props
    return (
      <div
        className="video-player"
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
        onMouseLeave={this.handleMouseLeave}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        ref={this.player}
      >
        <Video
          cam={cam} 
          ref={video => (this.video = video)}
          handlePlayOrPause={this.handlePlayOrPause}
          handlePlaying={this.handlePlaying}
          handleWaiting={this.handleWaiting}
        />
        <LoadingSpinner 
          playerControl={this.state}
          handlePlaying={this.handlePlaying}
          handleWaiting={this.handleWaiting}
        />
        <ControlBar
          playerControl={this.state}
          handlePlayOrPause={this.handlePlayOrPause}
          handlePlaying={this.handlePlaying}
          handleWaiting={this.handleWaiting}
          toggleFullScreen={this.toggleFullScreen}
          handlePlay={this.handlePlay}
          video={this.video}
          player={this.player}
          handleReload={this.handleReload}
        />
      </div>
    )
  }
}

export default Player
