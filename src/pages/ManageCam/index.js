import React, { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Loading from '../../components/Loading'
import GoogleMap from '../../components/GoogleMap'
// import Search from './Search'
// import SearchResult from './SearchResult'
// import AddCamera from './AddCamera'
import MarkerInstance from '../Sitemap/MarkerInstance'
import NewCameraMarker from '../../components/MarkerInstance/NewCameaMarker'
import { changeCameraParams, getCameraLocation } from '../../actions/action_camera'
import { showLoadingModal } from '../../actions/action_modal'
import './index.scss'

const Filter = lazy(() => import('./Filter'))
const AddCamera = lazy(() => import('./AddCamera'))

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: '0',flexGrow: '1' }}>
            {children}
        </Typography>
    );
}
const styles = (theme) => ({
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
        camPosition: []
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
    

    getPosition = ({ x, y, lat, lng, event }) => {
        const { mapInstance, mapApi } = this.state
        if(this.props.canAddCamera){
            this.props.showLoadingModal("Đang tải dữ liệu")
            this.props.getCameraLocation({lat, lng})
            // mapInstance.setCenter(new mapApi.LatLng(lat, lng))
            // mapInstance.setZoom(15)
        }
    }

    onPlaceChanged = ({map, mapApi} = this.props) => {

    }

    render(){
        console.log(this.props)
        const { classes, theme, newCameraPosition = {} } = this.props;
        const { value } = this.state
        return(
            <div className="page-wrapper">
                <div className="left-panel">
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
                        {value === 0 && <TabContainer dir={theme.direction}>
                            <div className={classes.wrapper}>
                                <Filter />
                            </div>
                        </TabContainer>}
                        {value === 1 && <TabContainer dir={theme.erver}>
                            <div className={classes.wrapper}>
                                <AddCamera />
                            </div>
                        </TabContainer>}
                        {value === 2 && <TabContainer dir={theme.erver}>
                            <div className={classes.wrapper}>
                                <AddCamera />
                            </div>
                        </TabContainer>}
                    </Suspense>
                    
                </div>
                <div className="right-panel">
                    <GoogleMap
                        center={this.state.center}
                        defaultZoom={this.props.zoom}
                        onClick={this.getPosition}
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
                                    displayInfoWindow={this.props.infoWindow === camera._id}
                                    showInfoWindow={this.props.showInfoWindow}
                                    closeInfoWindow={this.props.closeInfoWindow}
                                />
                            ))
                        }
                        { !isEmpty(newCameraPosition) && 
                            <NewCameraMarker 
                                lat={newCameraPosition.lat}
                                lng={newCameraPosition.lng}
                            />}
                    </GoogleMap>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({cameras, map}) => ({
    cameras: cameras.cameras,
    canAddCamera: cameras.canAddCam,
    newCameraPosition: {
        lat: cameras.addCamera.lat,
        lng: cameras.addCamera.lng
    },
    // canAddCamera: cameras.canAddCamera,
    infoWindow: map.showInfoWindow,
})

export default withRouter(connect(mapStateToProps, {
    getCameraLocation: getCameraLocation,
    showLoadingModal: showLoadingModal
})(withStyles(styles, { withTheme: true })(ManageCam)))