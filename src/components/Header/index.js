import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Nav } from 'reactstrap'
import { withStyles } from '@material-ui/core/styles'
import  logo  from '../../assets/images/logo.png'
import Size from '../Pages/FollowList/Size'
import Pagination from '../Pages/FollowList/Pagination'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';

import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import ExitToApp from '@material-ui/icons/ExitToApp'
import Search from '@material-ui/icons/Search'
import classnames from 'classnames'
import { Tooltip } from '@material-ui/core';
import { toggleCameraFilter } from '../../actions/action_ui'
import { NotificationImportantOutlined } from '@material-ui/icons';

function arrowGenerator(color) {
    return {
        '&[x-placement*="bottom"] $arrow': {
            top: 0,
            left: 0,
            marginTop: '-0.95em',
            width: '3em',
            height: '1em',
            '&::before': {
                borderWidth: '0 1em 1em 1em',
                borderColor: `transparent transparent ${color} transparent`,
            },
        },
        '&[x-placement*="top"] $arrow': {
            bottom: 0,
            left: 0,
            marginBottom: '-0.95em',
            width: '3em',
            height: '1em',
            '&::before': {
                borderWidth: '1em 1em 0 1em',
                borderColor: `${color} transparent transparent transparent`,
            },
        },
        '&[x-placement*="right"] $arrow': {
            left: 0,
            marginLeft: '-0.95em',
            height: '3em',
            width: '1em',
            '&::before': {
                borderWidth: '1em 1em 1em 0',
                borderColor: `transparent ${color} transparent transparent`,
            },
        },
        '&[x-placement*="left"] $arrow': {
            right: 0,
            marginRight: '-0.95em',
            height: '3em',
            width: '1em',
            '&::before': {
                borderWidth: '1em 0 1em 1em',
                borderColor: `transparent transparent transparent ${color}`,
            },
        },
    };
}

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
        borderRight: '2px solid #ccc'
    },
    logoImage: {
        height: '100%',
        cursor: 'pointer'
    },
    titlePage: {
        marginRight: 'auto',
        display: 'flex',
        padding: '6px 24px',
        fontSize: '0.825rem',
        fontWeight: 500,
        alignItems: 'center',
    },
    nav:{
        display: 'flex',
        alignItems: 'center',
        paddingRight: 18,
        paddingLeft: 18,

    },
    smallIcon: {
        fontSize: 20
    },
    arrow: {
        position: 'absolute',
        fontSize: 8,
        width: '3em',
        height: '3em',
        '&::before': {
            content: '""',
            margin: 'auto',
            display: 'block',
            width: 0,
            height: 0,
            borderStyle: 'solid',
        },
    },
    bootstrapPopper: arrowGenerator(theme.palette.common.black),
    bootstrapTooltip: {
        backgroundColor: theme.palette.common.black,
    },    
    bootstrapPlacementLeft: {
        margin: '0 8px',
    },
    bootstrapPlacementRight: {
        margin: '0 8px',
    },
    bootstrapPlacementTop: {
        margin: '8px 0',
    },    
    bootstrapPlacementBottom: {
        margin: '8px 0',
    },
})
class Header extends Component{
    state = {
        arrowRef: null
    }
    handleArrowRef = node => {
        this.setState({
            arrowRef: node
        })
    }

    toogleFilterCamera = event => {
        this.props.dispatch(toggleCameraFilter())
    }
    render(){
        const { isFollowListPage, cameraHeaderMenu, classes } = this.props
        return(
            <header className={classes.root}>
                <div className={classes.logoWrapper}>
                    <img src={logo} className={classes.logoImage} alt="Centic logo"/>
                </div>
                <div className={classes.titlePage}>
                    QUẢN LÝ CAMERA
                </div>

                <div className={classes.nav}>
                    <Tooltip
                        title={
                            <React.Fragment>
                                Thông báo
                                <span className={classes.arrow} ref={this.handleArrowRef} />
                            </React.Fragment>
                        }
                        classes={{
                            tooltip: classes.bootstrapTooltip,
                            popper: classes.bootstrapPopper,
                            tooltipPlacementLeft: classes.bootstrapPlacementLeft,
                            tooltipPlacementRight: classes.bootstrapPlacementRight,
                            tooltipPlacementTop: classes.bootstrapPlacementTop,
                            tooltipPlacementBottom: classes.bootstrapPlacementBottom,
                        }}
                        PopperProps={{
                            popperOptions: {
                                modifiers: {
                                    arrow: {
                                        enabled: Boolean(this.state.arrowRef),
                                        element: this.state.arrowRef,
                                    },
                                },
                            },
                        }}
                    >
                        <IconButton>
                            <NotificationsNoneIcon className={classes.smallIcon} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip
                        title={
                            <React.Fragment>
                                Đăng xuất
                                <span className={classes.arrow} ref={this.handleArrowRef} />
                            </React.Fragment>
                        }
                        classes={{
                            tooltip: classes.bootstrapTooltip,
                            popper: classes.bootstrapPopper,
                            tooltipPlacementLeft: classes.bootstrapPlacementLeft,
                            tooltipPlacementRight: classes.bootstrapPlacementRight,
                            tooltipPlacementTop: classes.bootstrapPlacementTop,
                            tooltipPlacementBottom: classes.bootstrapPlacementBottom,
                        }}
                        PopperProps={{
                            popperOptions: {
                                modifiers: {
                                    arrow: {
                                        enabled: Boolean(this.state.arrowRef),
                                        element: this.state.arrowRef,
                                    },
                                },
                            },
                        }}
                    >
                        <IconButton>
                            <ExitToApp className={classes.smallIcon} />
                        </IconButton>
                    </Tooltip>
                </div>
                
            </header>
        )
    }
}

const mapStateToProps = ({followList, cameras}) => ({
    isFollowListPage: followList.isCurrentPage,
    cameraHeaderMenu: cameras.headerMenu
})

export default connect(mapStateToProps)(withStyles(styles)(Header))