import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import WrapperPlayer from './WrapperPlayer';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: "black",
  },
  text: {
    color: theme.palette.common.white
  }
})

class EmptyPlayer extends Component{
  render(){
    const {
      classes
    } = this.props
    return(
      <WrapperPlayer>
        <div className={classes.root}>
          <Typography className={classes.text} noWrap>
            THÊM CAMERA TỪ BẢN ĐỒ
          </Typography>
        </div>
      </WrapperPlayer>
    )
  }
}

export default withStyles(styles)(EmptyPlayer)