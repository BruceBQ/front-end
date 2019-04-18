import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import ClearOutlined from '@material-ui/icons/ClearOutlined'
import { Typography } from '@material-ui/core';
import Player from '../../components/Player/components/Player'
import { closeInfoWindow } from '../../actions/action_map'
import Loading from '../../components/Loading'

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
    transformStyle: 'preserve-3d',
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

class LiveView extends Component {
  _onInfoWindowClick = (event) => {
    event.stopPropagation()
  }
  _onCloseInfoWindowClick = () => {
    const { id } = this.props.detail
    this.props.closeInfoWindow(id)
  }
  render() {
    const { 
      classes,
      detail = {},
      isFetchingStreaming,
      streamingUrl
    } = this.props
    return  (
      <Fragment>
        {isFetchingStreaming ? <Loading /> :
          <Player cam={streamingUrl} onClick={e =>e.stopPropagation}/>
        }
      </Fragment>
    )
  }
}
const mapStateToProps = ({cameras}) => ({
  isFetchingStreaming: cameras.isFetchingStreaming,
  streamingUrl: cameras.streamingUrl
})

export default connect(mapStateToProps,
  {
    closeInfoWindow: closeInfoWindow
  }
)(withStyles(styles)(LiveView))
