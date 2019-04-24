import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Hls from 'hls.js'
import _ from 'lodash'

import Video from './Video'
import ControlBar from './ControlBar'
import LoadingSpinner from './LoadingSpinner'
import './player.scss'
import fullscreen from '../utils/fullscreen'

class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showControls: false,
      paused: false,
      fullscreen: false,
      waiting: true,
      userActive: false
    }
    this.controlHideTimer = null
    this.video = React.createRef()
    this.player = React.createRef()
    // this.handleControlBarMouseEnter = this.handleControlBarMouseEnter.bind(this)
  }

  static defaultProps = {
    aspectRatio: 'auto',
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
    fullscreen.addEventListener(this.handleFullScreenChange)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
    fullscreen.removeEventListener(this.handleFullScreenChange)
    if (this.controlsHideTimer) {
      window.clearTimeout(this.controlsHideTimer);
      this.controlHideTimer = null
    }
  }

  handleResize = () => {}

  handleMouseDown = () => {}

  handleMouseMove = () => {
    this.startControlsTimer()
  }

  startControlsTimer = () => {    
    console.log('start timer')
    this.setState({
      showControls: true
    })
    let controlBarActiveTime = 2500
    clearTimeout(this.controlHideTimer)
    console.log(this.controlHideTimer)

    this.controlHideTimer = setTimeout(() => {
      console.log('vietbq')
      this.setState({
        showControls: false
      }, () => console.log('hide control bar'))
    }, controlBarActiveTime)
  }

  stopControlTimer = () => {
    clearTimeout(this.controlHideTimer)
  }
  handleMouseLeave = () => {
    this.setState({
      showControls: false,
    })
  }

  handleControlBarMouseEnter = (e) => {
    e.stopPropagation()
    // this.setState({
    //   showControls: true
    // }, () => console.log('show controlbar'))
    // console.log('mouse enter control bar')
    // if(this.controlHideTimer){
    //   this.stopControlTimer()
    //   this.setState({
    //     showControls: true
    //   })
    //   this.controlHideTimer = 0
    // }
    this.setState({
      userActive: true
    })
  }

  handleControlBarMouseLeave = (e) => {
    // console.log(e)
    // e.stopPropagation()
    // console.log('mouse leave control bar')
    this.setState({
      // showControls: false,
      userActive: false
    })
  }
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
      // fullscreen.request(player)
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

    if(_.isEmpty(cam.stream_url)){
      return (
        <div className="video-player-error">
          <div>{cam.error}</div>
        </div>
      )
    }
    return (
      <div
        className="video-player"
        onDoubleClick={e=>e.stopPropagation()}
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
          // onMouseEnter={this.handleControlBarMouseEnter}
          // onMouseLeave={this.handleControlBarMouseLeave}
          cam={cam}
          playerControl={this.state}
          handleControlBarMouseEnter={this.handleControlBarMouseEnter}
          handleControlBarMouseLeave={this.handleControlBarMouseLeave}
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
