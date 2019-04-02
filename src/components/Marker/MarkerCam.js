import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton';
import ClearOutlined from '@material-ui/icons/ClearOutlined'
import {cancelFocusedCam} from '../../actions/action_camera'
import cx from 'classnames'
import './index.scss'
import Typography from '@material-ui/core/Typography';
const styles = theme => ({
  popper: {
    position: 'absolute',
    transform: 'translate(-50%, -100%)',
    top: 0,
    left: '50%',
  },
  tooltip: {
    maxWidth: 300,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    color: '#fff',
    fontSize: '0.725rem',
    borderRadius: '4px',
    padding: '4px 8px',
    left: '50%',
    margin: '8px 0',
  },
  arrow: {
    bottom: 0,
    width: '3rem',
    height: '1rem',
    position: 'absolute',
    '&::before': {
      width: 0,
      height: 0,
      margin: 'auto',
      content: "",
      display: "block",
      borderStyle: 'solid',
      borderWidth: '0 1em 1em 1em',
      borderColor: 'transparent transparent #000 transparent',
    }
  },
  icon: {
    zIndex: 3,
    // fontSize: 13,
    padding: 3,
    position: 'absolute',
    top: 11,
    right: 2,
    color: '#fff'
  },
  smallIcon: {
    fontSize: 14
  }
})

class MarkerCam extends Component{
  state = {
    hover: false
  }

  handleClick = (e) => {
    e.stopPropagation()
    this.setState({
      hover: false
    })
    this.props.cancelFocusedCam()
  }
  
  _onMouseEnter = () => {
    this.setState({
      hover: true
    })
  }
  _onMouseLeave = () => {
    this.setState({
      hover: false
    })
  }

  _onMarkerClick = () => {

  }

  render(){
    const { 
      detail, 
      classes, 
      focusedCam,
      onClick
    } = this.props
    const isFocused = focusedCam === detail.id
    const { hover } = this.state
    
    const markerStyles = cx('marker-instance',{
      'camera-normal': detail.status === 'enabled',
      'camera-disabled': detail.status === 'disabled',
      'marker-hover' : isFocused || hover
    }
    )
    return (
      <div className={markerStyles}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
        onClick={(e) => onClick(detail, e)}
      >
        {(isFocused || hover) && <div className={classes.popper}>
          <div className={classes.tooltip}>
          {isFocused && <IconButton 
            className={classes.icon}
            onClick={this.handleClick}
          >
            <ClearOutlined className={classes.smallIcon}/>
          </IconButton>}
            <Typography 
              color="inherit" 
              noWrap
              align="center"
            >{detail.name}</Typography>
            <Typography 
              color="inherit" 
              noWrap
              align="center"
            >{detail.ip}</Typography>
            <Typography 
              color="inherit" 
              noWrap
              align="center"
            >{detail.address}</Typography>
            {/* <span className={classes.arrow}/> */}
            <span className="arrow"/>
          </div>
        </div>}
      </div>
    )
  }
}

const mapStateToProps = ({map}) => ({
  focusedCam: map.focusedCam
})
export default connect(mapStateToProps, {
  cancelFocusedCam: cancelFocusedCam
})(withStyles(styles, {withTheme: true})(MarkerCam))