import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings'
import InfoOutlined from '@material-ui/icons/InfoOutlined'
import RemoveRedEyeOutlined from '@material-ui/icons/RemoveRedEyeOutlined'
import DeleteIcon from '@material-ui/icons/Delete'
import Typography from '@material-ui/core/Typography';
import { changeBoundsMap } from '../../actions/action_map'
import { focusedCam } from '../../actions/action_camera'


const styles = theme => ({
  card: {
    display: 'flex',
    marginTop: 5,
    marginRight: 15,
    cursor: 'pointer'
  },
  focused: {
    backgroundColor: '#e0e0e0'
  },
  cardMediaWrapper: {
    width: 150,
  },
  controls: {
    paddingLeft: 16
  },
  details: {
    width: 'calc(100% - 150px)',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    width: '100%',
    paddingTop: '56.25%',
  },
  cardContent: {
    paddingTop: 5,
    paddingBottom: 0,
  },
  iconButton: {
    padding: '6px'
  },
  icon: {
    fontSize: 16
  },
  name: {
    fontSize: 16,
    fontWeight: 500,
  },
  description: {
    lineHeight: '1.5em',
    fontSize: '0.825rem'
  }
})
class CameraItem extends Component{
  handleClick = () => {
    const { lat, lng, id } = this.props.detail
    this.props.focusedCam({
      center: { lat, lng },
      zoom: 15,
      id
    })
  }
  _onMoustLeave = () => {

  }
  _onMoustLeave = () => {

  }
  handleIconClick = (event) => {
    event.stopPropagation()
  }
  render(){
    const { classes, detail, focused_cam } = this.props
    const isFocused = focused_cam === detail.id
    return(
        <Card className={classNames(classes.card, {
          [classes.focused]: isFocused
        })} 
          onClick={this.handleClick}
          onMouseEnter={this._onMouseEnter}
          onMouseLeave={this._onMouseLeave}
        >
          <div className={classes.cardMediaWrapper}>
            <CardMedia
              className={classes.cardMedia}
              image={detail.thumnail}
            />
          </div>
          <div className={classes.details}>
            <CardContent className={classes.cardContent}>
              <Typography variant="inherit" noWrap className={classes.name}>
                {detail.name}
              </Typography>
              <Typography variant="inherit" noWrap 
                // color="textSecondary" 
                // className={classes.description}
              >
                {/* {detail.ip} */}
              </Typography>
              <Typography variant="inherit" noWrap
                // color="textSecondary" 
                // className={classes.description}
              >
                {detail.address}
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <Fragment>
                <IconButton className={classes.iconButton} onClick={this.handleIconClick}>
                  <SettingsIcon  className={classes.icon}/>
                </IconButton>
                <IconButton className={classes.iconButton} onClick={this.handleIconClick}>
                  <DeleteIcon className={classes.icon}/>
                </IconButton>
              </Fragment>
            </div>
          </div>
        </Card>
      // </ListItem>
    )
  }
}


const mapStateToProps = ({map}) => ({
  focused_cam: map.focusedCam
})
export default connect(mapStateToProps, {
  focusedCam: focusedCam
})(withStyles(styles)(CameraItem))