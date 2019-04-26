import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import ClearOutlined from '@material-ui/icons/ClearOutlined'
import _ from 'lodash'


import { cancelHoverRowVehicle } from '../../actions/action_searchVehicles'
const styles = theme => ({
  popper: {
    margin: '0 7px',
    position: 'absolute',
    transform: 'translate(100%, -50%)',
    transformStyle: 'preserve-3d',
    top: '50%',
    right: '-50%',
    // left: '50%',
    cursor: 'default',
  },
  tooltip: {
    // maxWidth: 400,
    // minWidth: 200,
    // width: 'auto',
    // height: 300,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: '0 0 10px #333',
    fontSize: '0.725rem',
    borderRadius: '4px',
    // padding: '4px 8px',
    left: '50%',
    // margin: '0 10px',
    margin: 0,
  },
  header: {
    display: 'flex',
    textAlign: 'right',
    marginLeft: 'auto',
    flexDirection: 'row',
    height: 30,
    position: 'relative',
    padding: '4px 4px 0 4px',
  },
  info: {
    marginTop: -10,
    padding: '0 5px',
  },

  iconButton: {
    position: 'absolute',
    right: 0,
    padding: 6,
  },
  icon: {
    fontSize: 14,
  },
  plate: {
    fontSize: 16,
    fontWeight: 500,
  },
  imageWrapper: {
    width: '100%',
    padding: 5,
    overflow: 'hidden'
  },
  image: {
    // width: '100%',
    maxWidth: '400px !important',
    minWidth: '200px !important',
    width: 'auto',
    pointerEvents: 'none'
  }, 
  
})

class InfoWindow extends Component {
  _onClose = () => {
    this.props.closeHoverInfo()
    this.props.cancelHoverRowVehicle()
  }

  render() {
    const { classes, vehicle } = this.props
    console.log(this.props)
    return (
      <div className={classes.popper}>
        <div className={classes.tooltip}>
          <div className={classes.header}>
            <IconButton className={classes.iconButton} onClick={this._onClose}>
              <ClearOutlined className={classes.icon} />
            </IconButton>
          </div>
          <div className={classes.info}>
            <Typography noWrap className={classes.plate}>
              {vehicle.plate_number}
            </Typography>
            <Typography noWrap className={classes.camName}>
              {_.get(vehicle, 'camera.name')}
            </Typography>
            <Typography noWrap className={classes.time}>
              {vehicle.timestamp}
            </Typography>
            <Typography noWrap className={classes.address}>
              {vehicle.address}
            </Typography>
          </div>
          <div className={classes.imageWrapper}>
            <img src={vehicle.vehicle_img} className={classes.image}/>
          </div> 
          <span className="arrow-left" />
        </div>
      </div>
    )
  }
}

export default connect(null, {cancelHoverRowVehicle})(withStyles(styles)(InfoWindow))
