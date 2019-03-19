import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Nav } from 'reactstrap'
import { NavLink as RouteNavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSitemap } from '@fortawesome/free-solid-svg-icons'
// import { faBell } from '@fortawesome/free-regular-svg-icons'
import { withStyles } from '@material-ui/core/styles'
import { Link } from '@material-ui/core/Link'
import AppsOutlined from '@material-ui/icons/AppsOutlined'
import IconButton from '@material-ui/core/IconButton';
import  SettingsOutlined from '@material-ui/icons/SettingsOutlined'
import  logo  from '../../assets/images/logo.png'
// import { Scrollbars } from 'react-custom-scrollbars'
import Tooltip from '@material-ui/core/Tooltip';
import SettingsMenu from './SettingsMenu'
import { toggleSettingsMenu } from '../../actions/action_ui'
const styles = theme => ({
    smallIcon:{
        fontSize: 20
    }
})

function MyLink( props){
    console.log(props)
    return(
        <RouteNavLink {...props} />
    )
}

class Sidebar extends Component{
    
    toggleSettingsMenu = () => {
        if(!this.props.settingsMenu){
            this.props.dispatch(toggleSettingsMenu())
        }else{
            console.log('aaaaaaaaaa')
        }
    }

    render(){
        const { classes } = this.props
        return(
                <div className="sidebar">
                    <div className="sidebar-wrapper">
                        <div className="top-icon">
                            <Nav>
                                <Tooltip title="BẢN ĐỒ" placement="right">
                                    <li className="nav-item">
                                        {/* <NavLink to="/dashboard/sitemap" className="nav-link" activeClassName='active' exact={true}>
                                            <span className='sidebar-icon'><FontAwesomeIcon icon={faSitemap} /></span>
                                        </NavLink> */}
                                    </li>
                                </Tooltip>
                                <Tooltip title="DS THEO DÕI" placement="right">
                                    {/* <li className="nav-item"> */}
                                        <Link component={MyLink} to='/dashboard/follow_list' exact={true}>
                                            <IconButton>
                                                <AppsOutlined className={classes.smallIcon}/>
                                            </IconButton>
                                        </Link>
                                        {/* <NavLink to='/dashboard/follow_list' activeClassName='active' exact={true}>
                                        </NavLink> */}
                                    {/* </li> */}
                                </Tooltip>
                            </Nav>
                        </div>
                        <div className="bottom-icon">
                            <Nav>
                                <li className="nav-item">
                                    <IconButton onClick={this.toggleSettingsMenu} className={classes.smallIcon}>
                                        <SettingsOutlined className={classes.smallIcon}/>
                                    </IconButton>
                                </li>
                            </Nav>
                        </div>
                    </div>
                    {this.props.settingsMenu && <SettingsMenu />}
                </div>
        )
    }
}

const mapStateToProps = ({ui}) => ({
    settingsMenu: ui.settingsMenu
})

export default connect(mapStateToProps)(withStyles(styles)(Sidebar))