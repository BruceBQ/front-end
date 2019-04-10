import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import logo from '../../assets/images/logo.png'
// import Size from '../Pages/FollowList/Size'
// import Pagination from '../Pages/FollowList/Pagination'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'

import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import ExitToApp from '@material-ui/icons/ExitToApp'
import Search from '@material-ui/icons/Search'
import classnames from 'classnames'
import { toggleCameraFilter } from '../../actions/action_ui'
import { NotificationImportantOutlined, SearchOutlined } from '@material-ui/icons'
import TooltipWrapper from '../TooltipWrapper'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 20,
    boxShadow: '0 0 35px 0 rgba(154,161,171,.3)',
    borderBottom: '1px solid #ddd',
    background: '#fff',
  },
  button: {
    margin: theme.spacing.unit,
  },
  logoWrapper: {
    height: 50,
    padding: '10px 10px 10px 10px',
    textAlign: 'center',
    borderRight: '2px solid #ccc',
  },
  logoImage: {
    height: '100%',
    cursor: 'pointer',
  },
  titlePage: {
    marginRight: 'auto',
    display: 'flex',
    padding: '6px 24px',
    fontSize: '0.825rem',
    fontWeight: 500,
    alignItems: 'center',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    // paddingRight: 18,
    // paddingLeft: 18,
  },
  smallIcon: {
    fontSize: 20,
  },
  rightControls: {
    borderLeft: '1px solid #ccc',
    paddingRight: 10,
    paddingLeft: 10,
  },
  leftControls: {
    paddingRight: 10,
  }
})
class Header extends Component {
  state = {
    arrowRef: null,
  }
  handleArrowRef = node => {
    this.setState({
      arrowRef: node,
    })
  }

  _onToggleCamFilter = event => {
    this.props.toggleCameraFilter()
  }

  render() {
    const { classes, location, isFollowListPage, cameraHeaderMenu } = this.props
    let titlePage = ''
    switch (location.pathname) {
      case '/dashboard/sitemap':
        titlePage = 'BẢN ĐỒ'
        break
      case '/dashboard/follow_list':
        titlePage = 'DANH SÁCH THEO DÕI'
        break
      case '/dashboard/manage_cam':
        titlePage = 'QUẢN LÝ CAMERA'
        break
    }
    return (
      <header className={classes.root}>
        <div className={classes.logoWrapper}>
          <img src={logo} className={classes.logoImage} alt="Centic logo" />
        </div>
        <div className={classes.titlePage}>{titlePage}</div>
        <div className={classes.nav}>
          <div className={classes.leftControls}>
            {location.pathname === '/dashboard/sitemap' && 
              <TooltipWrapper title="Tìm kiếm nâng cao">
                <IconButton onClick={this._onToggleCamFilter}>
                  <SearchOutlined className={classes.smallIcon} />
                </IconButton>
              </TooltipWrapper>
            }
          </div>
          <div className={classes.rightControls}>
            <TooltipWrapper title="Thông báo">
              <IconButton>
                <NotificationsNoneIcon className={classes.smallIcon} />
              </IconButton>
            </TooltipWrapper>
            <TooltipWrapper title="Đăng xuất">
              <IconButton>
                <ExitToApp className={classes.smallIcon} />
              </IconButton>
            </TooltipWrapper>
          </div>
        </div>
      </header>
    )
  }
}

const mapStateToProps = ({ followList, cameras }) => ({
  // isFollowListPage: followList.isCurrentPage,
  // cameraHeaderMenu: cameras.headerMenu
})

export default withRouter(connect(mapStateToProps, {
  toggleCameraFilter: toggleCameraFilter
})(withStyles(styles)(Header)))
