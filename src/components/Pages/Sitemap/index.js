import React, { Component, Fragment } from 'react';
import GoogleMap from '../../GoogleMap'
import Search  from './Search'
import CameraList from './CameraList'
import Button from '@material-ui/core/Button';
import MarkerInstance from './MarkerInstance'
import { MAP_API_KEY } from '../../../constant/constant_endpoint'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import cx from 'classnames'
import _ from 'lodash'

const getMapBounds = (map, maps, cameras) => {
    if(!_.isEmpty(cameras)){
        const bounds = new maps.LatLngBounds();
        cameras.forEach((camera) => {
            bounds.extend(new maps.LatLng(
                camera.location.coordinate.lat,
                camera.location.coordinate.lng,
            ));
        });
        return bounds;
    }
}

const bindResizeListener = (map, maps, bounds) => {
    maps.event.addDomListenerOnce(map, 'idle', () => {
        maps.event.addDomListener(window, 'resize', () => {
            map.fitBounds(bounds);
        });
    });
};

const apiIsLoaded = (map, maps, cameras) => {
    const  bounds = getMapBounds(map, maps, cameras)
    map.fitBounds(bounds)
    bindResizeListener(map, maps, bounds)
}

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
        this.props.showAddModal(type)
    }
    onChange = ({ center, zoom, bounds, marginBounds }) => {
        // console.log(center)
        // console.log(zoom)
        // console.log(bounds)
        // console.log(marginBounds)
        
    }

    onClick = () => {
        console.log('map-onclick')
    }

    onChildClick = (key, childProps) => {
        console.log(childProps)
        this.props.showInfoWindow(childProps.detail._id)
    }
    _distanceToMouse = (markerPos, mousePos, markerProps) => {
        console.log(markerPos)
        console.log(mousePos)
        console.log(markerProps)
    }
    toggleFilter = () => {
        this.props.toggleFilter()
    }
    render(){
        const Markers = this.props.cameras &&
            this.props.cameras.map((camera, index) => (
                <MarkerInstance 
                    key={index}
                    lat={camera.location.coordinate.lat}
                    lng={camera.location.coordinate.lng}
                />
            ))
        const cameraSearchStyles = cx('camera-search',
            this.props.cameraFilterSidebar ? 'hidden-filter' : ''
        )
        return(
            <div className="camerapage-wrapper ">
                <div className={cameraSearchStyles}>
                    <div className="toggle-filter">
                        <button className="btn-filter" onClick={this.toggleFilter}>
                            { this.props.cameraFilterSidebar ? <FontAwesomeIcon icon={faCaretRight} /> : <FontAwesomeIcon icon={faCaretLeft} />}
                        </button>
                    </div>
                    <div className="camera-search-wrapper">
                        <Search toggleFilter={this.props.toggleFilter}/>
                        <CameraList cameras={this.props.cameras}/>
                    </div>
                </div>
                <div className="map-wrapper">
                    <div className="camera-menu">
                        <Button variant="contained" color="primary"  onClick={this.showModal('ADD_CAMERA')}>Thêm camera</Button>
                    </div>
                    {!_.isEmpty(this.props.cameras) && (
                        <GoogleMap
                            center={this.state.center}
                            defaultZoom={this.props.zoom}
                            onClick={this.onClick}
                            onChange={this.onChange}
                            debounced={true}
                            // onChildClick={this.onChildClick}
                            // onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
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
                            ))}
                        </GoogleMap>
                    )}
                    
                </div>
            </div>
            
        )
    }
}

export default SitemapPage