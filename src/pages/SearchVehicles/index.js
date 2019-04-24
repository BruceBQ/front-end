import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Search from './Search'
import GoogleMap from '../../components/GoogleMap'
import SearchResult from './SearchResult';
const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  left: {
    width: 350,
    zIndex:4,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '5px 0 5px -5px #333',
  },
  right: {
    flexGrow: 1
  }
})

class SearchVehicles extends Component{
  state = { 
    center: {
      lat: 16.036308499726402,
      lng: 108.20592484212307
    },
    zoom: 13,
    
  }
  render(){
    const {
      classes
    } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.left}>
          <Search />
          <SearchResult />
        </div>
        <div className={classes.right}>
          <GoogleMap 
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({}) => ({
  
})

export default connect()(withStyles(styles)(SearchVehicles))