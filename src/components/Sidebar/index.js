import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Nav } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { Link } from '@material-ui/core/Link'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import TooltipWrapper from '../TooltipWrapper'
import AppsOutlined from '@material-ui/icons/AppsOutlined'
import MapsOutlined from '@material-ui/icons/MapOutlined'
import VideocamOutlined from '@material-ui/icons/VideocamOutlined'
import Search from '@material-ui/icons/Search'
import ScheduleOutlined from '@material-ui/icons/ScheduleOutlined'
import IconButton from '@material-ui/core/IconButton'
import SettingsOutlined from '@material-ui/icons/SettingsOutlined'
import SettingsMenu from './SettingsMenu'
import { toggleSettingsMenu } from '../../actions/action_ui'

const styles = theme => ({
  root: {
    width: 50,
    zIndex: 1,
    background: 'white',
    position: 'fixed',
    borderRight: '1px solid #E3E3E3',
    top: 50,
    bottom: 0,
  },
  wrapper: {
    height: '100%',
    width: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  topIcon: {
    flexGrow: 1,
    flexShrink: 1,
  },
  bottomIcon: {
    flexGrow: 0,
  },
  nav: {},
  navItem: {
    // width: '100%',
  },
  navLink: {
    display: 'flex',
  },
  navLinkActive: {
    display: 'block',
    color: '#1967d2',
  },
  smallIcon: {
    fontSize: 20,
  },
  icon: {
    marginRight: -10,
  },

  selected: {},
  listItemText: {
    fontSize: '0.825rem',
    fontWeight: 500,
  },
})

class Sidebar extends Component {
  state = {
    anchorEl: null,
  }

  toggleSettingsMenu = () => {
    if (!this.props.settingsMenu) {
      this.props.dispatch(toggleSettingsMenu())
    } else {
      console.log('aaaaaaaaaa')
    }
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { classes } = this.props
    const { anchorEl } = this.state
    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <div className={classes.topIcon}>
            <ul className={classes.nav}>
              <li className={classes.navItem}>
                <NavLink
                  to="/dashboard/sitemap"
                  className={classes.navLink}
                  activeClassName={classes.navLinkActive}
                  exact={true}
                >
                  {/* <span className='sidebar-icon'><FontAwesomeIcon icon={faSitemap} /></span> */}
                  <TooltipWrapper title="BẢN ĐỒ" placement="right">
                    <IconButton>
                      <MapsOutlined className={classes.smallIcon} />
                    </IconButton>
                  </TooltipWrapper>
                </NavLink>
              </li>
              <li className={classes.navItem}>
                <NavLink
                  to="/dashboard/follow_list"
                  activeClassName="active"
                  exact={true}
                >
                  <TooltipWrapper title="DANH SÁCH THEO DÕI" placement="right">
                    <IconButton>
                      <AppsOutlined className={classes.smallIcon} />
                    </IconButton>
                  </TooltipWrapper>
                </NavLink>
              </li>
              <li className={classes.navItem}>
                <NavLink
                  to="/dashboard/search_vehicles"
                  activeClassName="active"
                  exact={true}
                >
                  <TooltipWrapper title="TÌM KIẾM PHƯƠNG TIỆN" placement='right'>
                    <IconButton>
                      <Search className={classes.smallIcon} />
                    </IconButton>
                  </TooltipWrapper>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={classes.bottomIcon}>
            <Nav>
              <li className="nav-item">
                <IconButton
                  onClick={this.handleClick}
                  className={classes.smallIcon}
                >
                  <SettingsOutlined className={classes.smallIcon} />
                </IconButton>
              </li>
            </Nav>
          </div>
          <Menu
            id="expand-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>
              <NavLink to="/dashboard/manage_cam" className={classes.navLink}>
                <ListItemIcon className={classes.icon}>
                  <VideocamOutlined className={classes.smallIcon} />
                </ListItemIcon>
                <ListItemText
                  primary="QUẢN LÝ CAMERA"
                  classes={{ primary: classes.listItemText }}
                />
              </NavLink>
            </MenuItem>
            {/* <MenuItem onClick={this.handleClose}>
              <NavLink to="/dashboard/manage_cam" className={classes.navLink}>
                <ListItemIcon className={classes.icon}>
                  <ScheduleOutlined  className={classes.smallIcon}/>
                </ListItemIcon>
                <ListItemText primary="LOGS" classes={{primary: classes.listItemText}}/>
              </NavLink>
            </MenuItem> */}
          </Menu>
        </div>
        {/* {this.props.settingsMenu && <SettingsMenu />} */}
      </div>
    )
  }
}

const mapStateToProps = ({ ui }) => ({
  settingsMenu: ui.settingsMenu,
})

export default connect(mapStateToProps)(withStyles(styles)(Sidebar))
