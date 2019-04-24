import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  card: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5
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
  plate:{
    fontWeight: 500
  },
  time: {
    fontSize: 12
  }

})

class VehicleItem extends Component{
  render(){
    const {
      classes,
      data
    } = this.props
    return(
      <Card className={classes.card}>
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
    )
  }
}

export default connect()(withStyles(styles)(VehicleItem))