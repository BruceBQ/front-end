import React, { Component } from 'react'
import FollowToggle from './FollowToggle'
import FullScreenToggle from './FullScreenToggle'
import PlayToggle from './PlayToggle'
import LiveToggle from './LiveToggle'

class ControlBar extends Component {
  render() {
    const {
      isShowControls,
      isPaused,
      video,
      isLive,
      handlePlayOrPause,
      handleLive,
      handleNotLive,
      handleReload,
      src,
    } = this.props
    return (
      <div
        className={
          isShowControls
            ? 'video-controls'
            : 'video-controls video-controls--hide'
        }
      >
        <div className="video-controls__left">
          <PlayToggle
            video={video}
            isPaused={isPaused}
            handlePlayOrPause={handlePlayOrPause}
            handleLive={this.props.handleLive}
            handleNotLive={handleNotLive}
            src={src}
          />
          <LiveToggle isLive={isLive} reload={handleReload} />
        </div>
        <div className="video-controls__right">
          <FollowToggle />
          <FullScreenToggle
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
