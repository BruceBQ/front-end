import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import CamItem from './CamItem'
import { Scrollbars } from 'react-custom-scrollbars';
import Typography from '@material-ui/core/Typography';
import Loading from '../../components/Loading'

const styles = theme => ({
  root: {
    padding: '5px 0 5px 10px',
    flexGrow: '1',
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    fontWeight: '500'
  },
  cameraList: {
    flexGrow: '1',
    paddingTop: 5,
  }
})

class SearchResult extends Component {
  render(){
    const {
      classes,
      cams = []
    } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.title}>
          DANH SÁCH CAMERA ({cams.length})
        </div>
        <div className={classes.cameraList}>
          <Scrollbars style={{width: '100%', height: '100%'}}>
            {cams.length === 0 && 
              <Typography align="center">Không tìm thấy camera</Typography>
            }
            { cams.map((cam, index) => (
              <CamItem key={index} detail={cam} />
            ))}
          </Scrollbars>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({cameras}) => ({
  cams: cameras.cameras
})

export default  connect(mapStateToProps)(withStyles(styles)(SearchResult))