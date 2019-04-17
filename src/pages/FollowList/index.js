import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { withRouter } from 'react-router-dom'
import _ from 'lodash'
import Loading from '../../components/Loading'
import RowCamera from './RowCamera';

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    background: 'green',
  },
})

class FollowList extends Component {
  state = {
    height: 0,
    width: 0,
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }

  componentWillMount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    const height = window.innerHeight - 60,
      width = window.innerWidth - 50
    if (height / width <= 9 / 16) {
      this.setState({
        height: height,
        width: (height * 16) / 9,
      })
    } else {
      this.setState({
        height: (width * 9) / 16,
        width: width,
      })
    }
  }

  render() {
    const stylesWrapper = {
      height: this.state.height,
      width: this.state.width,
    }
    const { classes, cams, listSize, isFetching } = this.props

    const listCams = _.chunk(cams, Math.sqrt(parseInt(listSize)))
    return (
      <div className={classes.root}>
        <div className={classes.wrapper} style={stylesWrapper}>
          {isFetching ? <Loading /> : listCams.map((cams, index) => {
            return <RowCamera cams={cams} key={index} />
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ followList }) => ({
  cams: followList.cameras,
  isFetching: followList.isFetching,
  listSize: followList.listSize,
})
export default withRouter(
  connect(
    mapStateToProps,
    {},
  )(withStyles(styles)(FollowList)),
)
