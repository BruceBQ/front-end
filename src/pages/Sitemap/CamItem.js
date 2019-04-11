import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Info from '@material-ui/icons/Info'
import Typography from '@material-ui/core/Typography'
import TooltipWrapper from '../../components/TooltipWrapper'
import { showInfoWindow } from '../../actions/action_map'

const styles = theme => ({
  card: {
    display: 'flex',
    marginTop: 5,
    marginRight: 15,
    cursor: 'pointer'
  },
  cardMediaWrapper: {
    width: 150
  },
  focused: {
    backgroundColor: '#e0e0e0'
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
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 16
  },
  name: {
    fontSize: 16,
    fontWeight: 500
  },
  description: {
    lineHeight: '1.5em',
    fontSize: '0.825rem'
  },
  icon: {
    fontSize: 16
  },
  iconButton: {
    padding: 6
  },
})

class CamItem extends Component{
  _onCardClick = () => {
    const { id, lat, lng } = this.props.detail
    this.props.showInfoWindow({
      center: { lat, lng },
      id
      // zoom: 15
    })
  }
  render(){
    const {
      classes,
      detail = {},
      infoWindow
    } = this.props
    const isShowInfoWindow = detail.id === infoWindow
    return (
      <Card
        className={classNames(classes.card, {
          [classes.focused]: isShowInfoWindow
        })}
        onClick={this._onCardClick}
      >
        <div className={classes.cardMediaWrapper}>
          <CardMedia 
            className={classes.cardMedia}
            image={detail.thumnail}
          />
        </div>
        <div className={classes.details}>
          <CardContent className={classes.cardContent}>
            <Typography 
              variant="inherit" 
              noWrap 
              className={classes.name}
            >
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
            <TooltipWrapper title="Theo dõi">
              <IconButton
                className={classes.iconButton}

              > 
                <Visibility className={classes.icon} />
              </IconButton>
            </TooltipWrapper>
            <TooltipWrapper title="Thông tin">
              <IconButton
                className={classes.iconButton}
                
              >
                <Info className={classes.icon} />
              </IconButton>
            </TooltipWrapper>
          </div>
        </div>
      </Card>
    )
  }
}

const mapStateToProps = ({cameras, map}) => ({
  infoWindow: map.showInfoWindow
})

export default connect(mapStateToProps, 
  {
    showInfoWindow: showInfoWindow
  }
)(withStyles(styles)(CamItem))
