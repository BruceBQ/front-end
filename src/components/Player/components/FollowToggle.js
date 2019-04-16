import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'

class FollowToggle extends Component {

  render() {
    return (
      <div className="video-control__follow video-controls__tip-btn">
        <button className="btn-action follow">
          <FontAwesomeIcon icon={faEyeSlash} />
        </button>
        <div className="video-controls__title-tip">Bỏ theo dõi</div>
      </div>
    )
  }
}

export default FollowToggle
