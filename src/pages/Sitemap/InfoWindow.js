import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import ClearOutlined from '@material-ui/icons/ClearOutlined'
import { Typography } from '@material-ui/core';
import Player from '../../components/Player/components/Player'
import { closeInfoWindow } from '../../actions/action_map'

const styles = theme => ({
  root: {
    width: 510,
    height: 270,
    cursor: 'default',
    background: theme.palette.common.white,
    borderRadius: 4,
  },
  popper: {
    position: 'absolute',
    transform: 'translate(-50%, -100%)',
    top: 0,
    left: '50%'
  },
  tooltip: {
    // maxWidth: 300,
    width: 480,
    height: 300,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: '0 0 10px #333',
    fontSize: '0.725rem',

    borderRadius: '4px',
    // padding: '4px 8px',
    left: '50%',
    margin: '10px 0'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    height: 30,
    padding: '4px 4px 0 4px'
  },
  title: {
    flexGrow: 1,
    fontWeight: 500
  },
  iconButton: {
    padding: 6
  },
  icon: {
    fontSize: 14
  }
})

class InfoWindow extends Component {
  _onInfoWindowClick = (event) => {
    event.stopPropagation()
  }
  _onCloseInfoWindowClick = () => {
    this.props.closeInfoWindow()
  }
  render() {
    const { 
      classes,
      detail = {}
    } = this.props
    return  (
      
        <div 
          className={classes.popper}
          onClick={this._onInfoWindowClick}
        >
          <div className={classes.tooltip}>
            <div className={classes.header}>
              <Typography noWrap className={classes.title}>
                {detail.name}
              </Typography>
              <IconButton 
                className={classes.iconButton}
                onClick={this._onCloseInfoWindowClick}
              >
                <ClearOutlined className={classes.icon} />
              </IconButton>
            </div>
            <Player streamURL="http://10.49.46.54:3000/index.m3u8" />
            <span className="arrow" />
          </div> 
      
      </div>
    )
  }
}

export default connect(null,
  {
    closeInfoWindow: closeInfoWindow
  }
)(withStyles(styles)(InfoWindow))
