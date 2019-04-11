import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import Switch from '@material-ui/core/Switch'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import SettingsIcon from '@material-ui/icons/Settings'
import InfoOutlined from '@material-ui/icons/InfoOutlined'
import RemoveRedEyeOutlined from '@material-ui/icons/RemoveRedEyeOutlined'
import DeleteIcon from '@material-ui/icons/Delete'
import Typography from '@material-ui/core/Typography'
import TooltipWrapper from '../../components/TooltipWrapper'
import { changeBoundsMap } from '../../actions/action_map'
import { switchTab } from '../../actions/action_manageCam'
import { 
  focusOnCam, 
  configCam,
  getCamConnection
} from '../../actions/action_camera'

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
    width: 150
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 16
  },
  details: {
    width: 'calc(100% - 150px)',
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'center'
  },
  cardMedia: {
    width: '100%',
    paddingTop: '56.25%'
  },
  cardContent: {
    paddingTop: 5,
    paddingBottom: 0
  },
  iconButton: {
    padding: 6
  },
  icon: {
    fontSize: 16
  },
  name: {
    fontSize: 16,
    fontWeight: 500
  },
  description: {
    lineHeight: '1.5em',
    fontSize: '0.825rem'
  },
  switchBase: {
    height: 20
  }
})
class CameraItem extends Component {
  handleClick = e => {
    e.stopPropagation()
    const { lat, lng, id } = this.props.detail
    this.props.focusOnCam({
      center: { lat, lng },
      zoom: 15,
      id
    })
  }
  _onMouseLeave = () => {}
  _onMouseLeave = () => {}
  _onSwitchChange = id => e => {
    e.stopPropagation()
  }
  handleConfigsClick = e => {
    e.stopPropagation()
    const { id, lat, lng, name, ip } = this.props.detail
    this.props.configCam({
      center: { lat, lng },
      name,
      ip,
      zoom: 15,
      id
    })
    // this.props.getCamConnection({
    //   center: { lat, lng },
    //   zoom: 15,
    //   id
    // })
  }
  render() {
    const { classes, detail, focusedCam } = this.props
    const isFocused = focusedCam === detail.id
    return (
      <Card
        className={classNames(classes.card, {
          [classes.focused]: isFocused
        })}
        onClick={this.handleClick}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
      >
        <div className={classes.cardMediaWrapper}>
          <CardMedia className={classes.cardMedia} image={detail.thumnail} />
        </div>
        <div className={classes.details}>
          <CardContent className={classes.cardContent}>
            <Typography variant="inherit" noWrap className={classes.name}>
              {detail.name}
            </Typography>
            <Typography
              variant="inherit"
              noWrap
              // color="textSecondary"
              // className={classes.description}
            >
              {/* {detail.ip} */}
            </Typography>
            <Typography
              variant="inherit"
              noWrap
              // color="textSecondary"
              // className={classes.description}
            >
              {detail.address}
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <Fragment>
              <TooltipWrapper title="Cấu hình">
                <IconButton
                  className={classes.iconButton}
                  onClick={this.handleConfigsClick}
                >
                  <SettingsIcon className={classes.icon} />
                </IconButton>
              </TooltipWrapper>
              <TooltipWrapper title="Xóa">
                <IconButton
                  className={classes.iconButton}
                  onClick={this.handleDeleteClick}
                >
                  <DeleteIcon className={classes.icon} />
                </IconButton>
              </TooltipWrapper>
              <Switch
                color="primary"
                classes={{
                  switchBase: classes.switchBase
                }}
                checked={detail.status !== 'disabled'}
                onChange={this._onSwitchChange(detail.id)}
              />
            </Fragment>
          </div>
        </div>
      </Card>
      // </ListItem>
    )
  }
}

const mapStateToProps = ({ cameras }) => ({
  focusedCam: cameras.focusedCam
})
export default connect(
  mapStateToProps,
  {
    focusOnCam: focusOnCam,
    // switchTab: switchTab,
    configCam: configCam
    // getCamConnection: getCamConnection
  }
)(withStyles(styles)(CameraItem))
