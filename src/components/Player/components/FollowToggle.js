import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const styles = theme => ({

})

class FollowToggle extends Component {
  render() {
    const {
      classes
    } = this.props
    return (
        <button className="control-button control-button__follow">
          {true ? (
            <VisibilityOff className="control-button__icon"/>
          ) : (
            <Visibility className="control-button__icon"/>
          )}
          <div className="title-tip">Bỏ theo dõi</div>
        </button>
      
    )
  }
}

export default FollowToggle
