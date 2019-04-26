import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import classNames from 'classnames'
import blueGrey from '@material-ui/core/colors/blueGrey'
import {
  hoverRowVehicle,
  cancelHoverRowVehicle,
  focusVehicle,
} from '../../actions/action_searchVehicles'

const styles = theme => ({
  card: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
    cursor: 'pointer',
  },
  cardHovered: {
    backgroundColor: blueGrey[50],
  },
  cardFocused: {
    backgroundColor: blueGrey[100],
  },
  cardMediaWrapper: {
    width: 60,
    height: 60,
  },
  cardMedia: {
    width: 60,
    height: 60,
  },
  details: {
    width: 'calc(100% - 60px)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  cardContent: {
    paddingTop: 3,
    paddingBottom: '0 !important',
  },
  plate: {
    fontWeight: 500,
  },
  time: {
    fontSize: 12,
  },
})

class VehicleItem extends Component {
  timeout = null
  state = {
    hovered: false,
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  _onMouseEnter = () => {
    if (this.timeout) {
      clearTimeout(this.timeout)
      this.timeout = null
    }
    this.timeout = setTimeout(() => {
      this.setState({
        hovered: true,
      })
      this.props.hoverRowVehicle(this.props.data)
    }, 200)
  }

  _onMouseLeave = () => {
    this.setState({
      hovered: false,
    })
    if (this.timeout) {
      clearTimeout(this.timeout)
      this.timeout = null
    }
    // this.props.cancelHoverRowVehicle()
  }

  _onClick = () => {
    this.props.focusVehicle(this.props.data)
  }

  render() {
    const { classes, data, hoveredVehicle, focusedVehicle } = this.props

    return (
      <div
        className={classes.root}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
        onClick={this._onClick}
      >
        <Card
          className={classNames(classes.card, {
            [classes.cardHovered]:
              this.state.hovered || focusedVehicle.id === data.id,
            [classes.cardFocused]:
              focusedVehicle.plate_number === data.plate_number &&
              !this.state.hovered,
          })}
        >
          <div className={classes.cardMediaWrapper}>
            <CardMedia className={classes.cardMedia} image={data.plate_img} />
          </div>
          <div className={classes.details}>
            <CardContent className={classes.cardContent}>
              <Typography noWrap className={classes.plate}>
                {data.plate_number}
              </Typography>
              <Typography noWrap className={classes.time}>
                {data.timestamp}
              </Typography>
              <Typography noWrap className={classes.address}>
                {data.address}
              </Typography>
            </CardContent>
          </div>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = ({ searchVehicles }) => ({
  hoveredVehicle: searchVehicles.hoveredVehicle,
  focusedVehicle: searchVehicles.focusedVehicle,
})

export default connect(
  mapStateToProps,
  {
    hoverRowVehicle: hoverRowVehicle,
    cancelHoverRowVehicle: cancelHoverRowVehicle,
    focusVehicle: focusVehicle,
  },
)(withStyles(styles)(VehicleItem))
