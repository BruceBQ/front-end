import React, { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Loading from '../../components/Loading'
import MarkerInstance from '../Sitemap/MarkerInstance'
import { changeCameraParams, getCameraLocation } from '../../actions/action_camera'
import { showLoadingModal } from '../../actions/action_modal'
const GoogleMap = lazy(() => import('../../components/GoogleMap'))
const Filter = lazy(() => import('./Filter'))
const AddCamera = lazy(() => import('./AddCamera'))
const RightSite = lazy(() => import('./RightSite'))

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: '0',flexGrow: '1' }}>
      {children}
    </Typography>
  );
}
const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  left: {
    width: '30%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    zIndex:3,
    height: '100%',
    boxShadow: '5px 0 5px -5px #333',
    overflow: 'hidden',
  },
  right: {
    width: '70%',
    height: '100%'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    height:'100%'
  }
})

class ManageCam extends Component{
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
    value: 0,
    mapApiLoaded: false,
    mapInstance: null,
    mapApi: null,
    camPosition: [],
    activeStep: 0,
  }

  apiHasLoaded = (map, maps) => {
    this.setState({
      mapApiLoaded: true,
      mapInstance: map,
      mapApi: maps
    })
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render(){
    const { classes, theme, newCameraPosition = {} } = this.props;
    const { value } = this.state
    return(
      <div className={classes.root}>
        <div className={classes.left}>
          <AppBar position="static" color="default">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="Danh sách" />
              <Tab label="Cấu hình" />
              <Tab label="Thêm mới" />
            </Tabs>
          </AppBar>
          <Suspense fallback={<Loading />}>
            {value === 0 && 
              <TabContainer dir={theme.direction}>
                <div className={classes.wrapper}>
                  <Filter />
                </div>
              </TabContainer>}
            {value === 1 && 
              <TabContainer dir={theme.erver}>
                <div className={classes.wrapper}>
                  <AddCamera />
                </div>
              </TabContainer>}
            {value === 2 && 
              <TabContainer dir={theme.erver}>
                <div className={classes.wrapper}>
                  <AddCamera />
                </div>
              </TabContainer>}
          </Suspense>
        </div>
        <div className={classes.right}>
          <Suspense fallback={<Loading />}>
            {(value === 0 || value === 1) && 
              <GoogleMap
              center={this.state.center}
              defaultZoom={this.props.zoom}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)}
            >
              {this.props.cameras &&
                this.props.cameras.map((camera, index) => (
                  <MarkerInstance 
                    lat={camera.location.coordinate.lat}
                    lng={camera.location.coordinate.lng}
                    key={index}
                    detail={camera}
                    // displayInfoWindow={this.props.infoWindow === camera._id}
                    // showInfoWindow={this.props.showInfoWindow}
                    // closeInfoWindow={this.props.closeInfoWindow}
                  />
                ))
              }
              </GoogleMap>
            }
            {
              value === 2 && <RightSite />
            }
          </Suspense>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({cameras, map}) => ({
    cameras: cameras.cameras,
    // infoWindow: map.showInfoWindow,
})

export default withRouter(connect(mapStateToProps, {
  // getCameraLocation: getCameraLocation,
  // showLoadingModal: showLoadingModal
})(withStyles(styles, { withTheme: true })(ManageCam)))