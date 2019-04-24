import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { withRouter } from 'react-router-dom'
import _ from 'lodash'
import Loading from '../../components/Loading'
import RowCamera from './RowCamera'

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    // background: 'green',
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
  componentDidUpdate(prevProps) {
    if (this.props.currentPage !== prevProps.currentPage) {
      this.forceUpdate()
    }
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

  renderEmptyRow = amountEmptyRow => {
    const { listSize } = this.props
    if (amountEmptyRow > 0) {
      let row = []
      for (let i = 0; i < amountEmptyRow; i++) {
        row.push(<RowCamera empty key={i + listSize} cams={[]} />)
      }
      return row
    }
    return
  }

  render() {
    const stylesWrapper = {
      height: this.state.height,
      width: this.state.width,
    }
    const {
      classes,
      cams = [],
      listSize,
      isFetching,
      currentPage,
      totalPage,
    } = this.props
    const pageCamList = _.chunk(cams, Number(listSize))[currentPage - 1]
    const listCams = _.chunk(pageCamList, Math.sqrt(parseInt(listSize)))
    const amountEmptyRow = Math.sqrt(listSize) - listCams.length
    const emptyRow = this.renderEmptyRow(amountEmptyRow)
    return (
      <div className={classes.root}>
        <div className={classes.wrapper} style={stylesWrapper}>
          {isFetching ? (
            <Loading />
          ) : (
            <Fragment>
              {listCams.map((cams, index) => {
                return <RowCamera cams={cams} key={index} />
              })}
              {emptyRow}
            </Fragment>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ followList }) => ({
  cams: followList.cameras,
  isFetching: followList.isFetching,
  listSize: followList.listSize,
  currentPage: followList.currentPage,
  totalPage: followList.totalPage,
})
export default connect(mapStateToProps)(withStyles(styles)(FollowList))
