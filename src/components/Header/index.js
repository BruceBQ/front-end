import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'

import ExitToApp from '@material-ui/icons/ExitToApp'
import Search from '@material-ui/icons/Search'
import classnames from 'classnames'
import {
  NotificationImportantOutlined,
  SearchOutlined,
} from '@material-ui/icons'

import logo from '../../assets/images/logo_copy.png'
import logoVanLang from '../../assets/images/logo_vanlang.jpg'
import logoQN from '../../assets/images/logo_quangnam.png'
// import Size from '../Pages/FollowList/Size'
// import Pagination from '../Pages/FollowList/Pagination'

import { toggleCameraFilter, toggleDrawer } from '../../actions/action_ui'
import TooltipWrapper from '../TooltipWrapper'
import FollowListSize from './FollowListSize'
import Size from './Size'
import Pagination from './Pagination'
import User from './User'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: 51,
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
    // padding: '10px 10px 10px 10px',
    textAlign: 'center',
    borderRight: '2px solid #ccc',
  },
  logoImage: {
    padding: 10,
    height: '100%',
    // paddingBottom: 1,
    cursor: 'pointer',
  },
  titlePage: {
    marginRight: 'auto',
    display: 'flex',
    padding: '6px 24px',
    fontSize: 16,
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
    display: 'flex',
    borderLeft: '1px solid #ccc',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: 10,
  },
  leftControls: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 10,
    // height: '100%',
  },
  followList: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
  },
  iconButton: {
    height: 44
  }
})
class Header extends Component {
  state = {
    open: false,
  }

  _onToggleCamFilter = event => {
    this.props.toggleCameraFilter()
  }

  _onToggleDrawer = () => {
    this.props.toggleDrawer()
  }

  render() {
    const { classes, location, isFollowListPage, cameraHeaderMenu } = this.props
    let titlePage = ''
    switch (location.pathname) {
      case '/dashboard/sitemap':
        titlePage = 'BẢN ĐỒ CAMERA'
        break
      case '/dashboard/follow_list':
        titlePage = 'DANH SÁCH THEO DÕI'
        break
      case '/dashboard/manage_cam':
        titlePage = 'QUẢN LÝ CAMERA'
        break
      case '/dashboard/search_vehicles':
        titlePage = 'TÌM KIẾM PHƯƠNG TIỆN'
        break
    }
    return (
      <header className={classes.root}>
        <div className={classes.logoWrapper}>
          <img src={logo} className={classes.logoImage} alt="Centic logo" /> &
          <img src={logoVanLang} className={classes.logoImage} alt="Centic logo" />
        </div>
        <div className={classes.titlePage}>{titlePage}</div>
        <div className={classes.nav}>
          <div className={classes.leftControls}>
            {location.pathname === '/dashboard/sitemap' && (
              <TooltipWrapper title="Tìm kiếm nâng cao">
                <IconButton onClick={this._onToggleCamFilter}>
                  <SearchOutlined className={classes.smallIcon} />
                </IconButton>
              </TooltipWrapper>
            )}
            {location.pathname === '/dashboard/follow_list' && (
              // <FollowListSize />
              <div className={classes.followList}>
                <Pagination />
                <Size />
              </div>
            )}
          </div>
          <div className={classes.rightControls}>
            <TooltipWrapper title="Thông báo">
              <IconButton onClick={this._onToggleDrawer} className={classes.iconButton}>
                <NotificationsNoneIcon className={classes.smallIcon} />
              </IconButton>
            </TooltipWrapper>
            <User />
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

export default withRouter(
  connect(
    mapStateToProps,
    {
      toggleCameraFilter: toggleCameraFilter,
      toggleDrawer: toggleDrawer,
    },
  )(withStyles(styles)(Header)),
)
