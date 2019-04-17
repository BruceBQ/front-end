import React, { Component } from 'react'
import FollowToggle from './FollowToggle'
import FullScreenToggle from './FullScreenToggle'
import PlayToggle from './PlayToggle'
import Reload from './Reload'
import LiveToggle from './LiveToggle'

class ControlBar extends Component {
  render() {
    const {
      playerControl,
      video,
      handlePlaying,
      handleWaiting,
      handlePlayOrPause,
      handleLive,
      handleNotLive,
      handleReload,
      src,
    } = this.props
    return (
      <div
        className={
          // isShowControl
          true
            ? 'control-bar'
            : 'control-bar control-bar__hide'
        }
      >
        <div className="video-controls__left">
          <PlayToggle
            video={video}
            playerControl={playerControl}
            // isPaused={isPaused}
            handlePlayOrPause={handlePlayOrPause}
            handleLive={this.props.handleLive}
            // handleNotLive={handleNotLive}
            // src={src}
          />
          <Reload 
            playerControl={playerControl}
            handlePlaying={handlePlaying}
            handleWaiting={handleWaiting}
          />
          {/* <LiveToggle isLive={isLive} reload={handleReload} /> */}
        </div>
        <div className="video-controls__right">
          <FollowToggle />
          <FullScreenToggle
            playerControl={playerControl}
            isFullScreen={this.props.isFullScreen}
            toggleFullScreen={this.props.toggleFullScreen}
            player={this.props.player}
          />
        </div>
      </div>
    )
  }
}

export default ControlBar
