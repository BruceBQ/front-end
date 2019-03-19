import React, { Component } from 'react';
import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react';
import { MAP_API_KEY } from '../constant/constant_endpoint'
class GoogleMap extends Component{
  render(){
    return(
      <GoogleMapReact 
        bootstrapURLKeys={{key: MAP_API_KEY}}
        {...this.props}
      >
        {this.props.children}
      </GoogleMapReact>
    )
  }
}

GoogleMap.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
}

GoogleMap.defaultProps = {
  children: null
}

export default GoogleMap