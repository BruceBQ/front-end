import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import GoogleMap from '../../components/GoogleMap'
import Search from './Search'
import CameraList from './CameraList'
import Button from '@material-ui/core/Button'
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
  root: {
    position: 'relative',
    display: 'flex',
  },
  mapWrapper: {
    width: '100%',
    height: 'calc(100vh - 50px)',
    position: 'relative',
  },
  mapWraperWithFiller: {
    width: 'calc(100% - 400px)',
    height: 'calc(100vh - 50px)',
    position: 'relative',
  },
  filterWrapper: {
    width: '400px',
    height: 'calc(100vh - 50px)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '-5px 0 5px -5px #333;',
  },
  hideFilterWrapper: {
    width: 0,
    display: 'none',
  },
})
class SitemapPage extends Component {
  _onBoundsChange = ({ center, zoom, bounds, marginBounds }) => {
    this.props.changeBoundsMap({ center, zoom })
  }

  onClick = () => {
    console.log('map-onclick')
  }

  onChildClick = (key, childProps) => {
    console.log(childProps)
  }

  componentWillUnmount() {
    // this.props.exitSitemapPage()
  }

  render() {
    const {
      classes,
      cameraFilterSidebar,
      cams = [],
      center = {},
      defaultZoom,
      zoom,
    } = this.props
    const cameraSearchStyles = cx(
      'camera-search',
      this.props.cameraFilterSidebar ? 'hidden-filter' : '',
    )
    return (
      <div className={classes.root}>
        <div
          className={
            cameraFilterSidebar
              ? classes.mapWraperWithFiller
              : classes.mapWrapper
          }
        >
          <GoogleMap
            center={center}
            defaultZoom={defaultZoom}
            zoom={zoom}
            onClick={this.onClick}
            onChange={this._onBoundsChange}
          >
            {cams.map((cam, index) => (
              <Marker lat={cam.lat} lng={cam.lng} key={index} detail={cam} />
            ))}
          </GoogleMap>
        </div>
        <div
          className={
            cameraFilterSidebar
              ? classes.filterWrapper
              : classes.hideFilterWrapper
          }
        >
          {cameraFilterSidebar && (
            <Fragment>
              <SearchCamera />
              <SearchResult />
            </Fragment>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ cameras, map, ui }) => ({
  cams: cameras.cameras,
  isLoading: cameras.isLoading,
  infoWindow: map.showInfoWindow,
  cameraFilterSidebar: ui.cameraFilterSidebar,
  center: map.center,
  defaultZoom: map.defaultZoom,
  zoom: map.zoom,
})

export default connect(
  mapStateToProps,
  {
    changeBoundsMap: changeBoundsMap,
  },
)(withStyles(styles)(SitemapPage))
