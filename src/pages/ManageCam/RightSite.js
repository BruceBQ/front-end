import React, { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import AddCameraMap from './AddCameraMap'
import Zone from './Zone'


const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
  }
})
class RightSite extends Component{
  static defaultProps = {
    center: {
      lat: 16.036308499726402,
      lng: 108.20592484212307
    },
    zoom: 13
  };
  state = {
    center: {
      lat: 16.036308499726402,
      lng: 108.20592484212307
    },
    zoom: 13,
    mapApiLoaded: false,
    mapInstance: null,
    mapApi: null,
  }
  apiHasLoaded = (map, maps) => {
    this.setState({
      mapApiLoaded: true,
      mapInstance: map,
      mapApi: maps
    })
  }
  getCoordinates = ({ x, y, lat, lng, event }) => {
    // this.props.
  }

  render(){
    const { 
      classes, 
      activeStep, 
      cameras = []
    } =  this.props
    return (
      <div className={classes.root}>
        {activeStep === 0 && <AddCameraMap /> }
        {activeStep === 1 && <div></div>}
        {activeStep === 2 && <Zone />}
      </div>
    )
  }
}

const mapStateToProps = ({cameras}) => ({
  cameras: cameras.cameras,
  activeStep: cameras.addCamera.activeStep
})

export default connect(mapStateToProps, {
  
})(withStyles(styles)(RightSite))