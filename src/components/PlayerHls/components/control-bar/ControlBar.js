import React, { Component } from 'react'
import classNames from 'classnames'
import FullscreenToggle from './FullscreenToggle'
import FollowToggle from './FollowToggle';
import PlayToggle from './PlayToggle'

class ControlBar extends Component{

  render(){
    const {
      manager
    } = this.props
    return (
      <div className="control-bar">
        <div className="control-bar__left">
          <PlayToggle {...this.props}/>
        </div> 
        <div className="control-bar__right">
          <FollowToggle {...this.props}/>
          <FullscreenToggle {...this.props}/>
        </div>
      </div>
    )
  }
}

export default ControlBar