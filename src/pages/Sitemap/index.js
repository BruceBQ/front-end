import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import GoogleMap from '../../components/GoogleMap'
import Search  from './Search'
import CameraList from './CameraList'
import Button from '@material-ui/core/Button';
import MarkerInstance from './MarkerInstance'
// import { SitemapMarkerCam } from '../../components/Marker'
import Marker from './Marker'
import SearchCamera from '../ManageCam/Search'
import SearchResult from './SearchResult'
import cx from 'classnames'
import { changeBoundsMap } from '../../actions/action_map'
import _ from 'lodash'
import * as CameraActions from '../../actions/action_camera'
import * as ModalActions from '../../actions/action_modal'
import * as MapActions from '../../actions/action_map'
import * as UIActions from '../../actions/action_ui'

const styles = theme => ({
  root:{
    position: 'relative',
    display: 'flex',
  },
  mapWrapper: {
    width: '100%',
    height: 'calc(100vh - 50px)',
    position: 'relative'
  },
  mapWraperWithFiller: {
    width: '70%',
    height: 'calc(100vh - 50px)',
    position: 'relative'
  },
  filterWrapper: {
    width: '30%',
    height: 'calc(100vh - 50px)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '-5px 0 5px -5px #333;'
  },
  hideFilterWrapper: {
    width: 0,
    display: 'none',
  }
})
class SitemapPage extends Component{
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
    zoom: 13
  }
  renderMarkers = (map, maps) => {
    this.props.cameras.map(camera => {
      return new maps.Marker({
        position: camera.location.coordinate,
        map,
        title: camera.name
      })
    })
  }

  showModal = type => event => { 
      // this.props.showAddModal(type)
  }
  _onBoundsChange = ({ center, zoom, bounds, marginBounds }) => {
    this.props.changeBoundsMap({center, zoom})
  }

  onClick = () => {
    console.log('map-onclick')
  }

  onChildClick = (key, childProps) => {
    console.log(childProps)
    // this.props.showInfoWindow(childProps.detail._id)
  }
  _distanceToMouse = (markerPos, mousePos, markerProps) => {
    console.log(markerPos)
    console.log(mousePos)
    console.log(markerProps)
  }
  toggleFilter = () => {
      // this.props.toggleFilter()
  }
  componentWillUnmount(){
      // this.props.exitSitemapPage()
  }
    
  render(){
    const { 
      classes,
      cameraFilterSidebar,
      cameras = [],
      center = {}, 
      defaultZoom,
      zoom
    } = this.props
    const cameraSearchStyles = cx('camera-search',
      this.props.cameraFilterSidebar ? 'hidden-filter' : ''
    )
    return(
      <div className={classes.root}>
        <div className={cameraFilterSidebar ? classes.mapWraperWithFiller: classes.mapWrapper}>
          <GoogleMap
            center={center}
            defaultZoom={defaultZoom}
            zoom={zoom}
            onClick={this.onClick}
            onChange={this._onBoundsChange}
          >
            { !_.isEmpty(cameras) && cameras.map((cam, index) => (
              <Marker
                lat={cam.lat}
                lng={cam.lng}
                key={index}
                detail={cam}
              />
            ))
            }
          </GoogleMap>
        </div>
        <div className={cameraFilterSidebar ? classes.filterWrapper : classes.hideFilterWrapper}>
          {cameraFilterSidebar && 
            <Fragment>
              <SearchCamera />
              <SearchResult />
            </Fragment>  
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({cameras, map, ui}) => ({
  cameras: cameras.cameras,
  isLoading: cameras.isLoading,
  infoWindow: map.showInfoWindow,
  cameraFilterSidebar: ui.cameraFilterSidebar,
  center: map.center,
  defaultZoom: map.defaultZoom,
  zoom: map.zoom
})

const mapDispatchToProps = (dispatch) => ({
  // gotoSitemapPage: dispatch(CameraActions.gotoSitemapPage()),
  // exitSitemapPage: () => dispatch(CameraActions.exitSitemapPage()),
  // getListCameras: dispatch(CameraActions.getCameras()),
  // showAddModal: (modalType) => dispatch(ModalActions.showAddModal(modalType)),
  // showEditModal: (data) => dispatch(ModalActions.showEditModal(data)),
  // showDeleteModal: (data) => dispatch(ModalActions.showDeleteModal(data)),
  // showInfoWindow: (id) => dispatch(MapActions.showInfoWindow(id)),
  // closeInfoWindow: () => dispatch(MapActions.closeInfoWindow()),
  // toggleFilter: () => dispatch(UIActions.toggleFilter()),
})

export default connect(mapStateToProps, 
  {
    changeBoundsMap: changeBoundsMap
  }
)(withStyles(styles)(SitemapPage))