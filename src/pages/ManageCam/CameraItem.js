import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings'
import InfoOutlined from '@material-ui/icons/InfoOutlined'
import RemoveRedEyeOutlined from '@material-ui/icons/RemoveRedEyeOutlined'
import DeleteIcon from '@material-ui/icons/Delete'
const styles = theme => ({
    root: {

    },
    card: {
        display: 'flex',
        marginTop: 5,
        marginRight: 15
    },
    details: {
        display: 'flex',
        flexDirection: 'column'
    },
    content: {
        // flex: '1 0 auto',
        paddingTop: 5,
        paddingBottom: 0,
    },
    camName: {
        display: 'inline-block',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',

        fontSize: '1rem',
        fontWeight: '500'
    },
    address: {
        fontSize: '0.875rem'
    },
    controls: {
        paddingLeft: 16
    },
    iconButton: {
        padding: '6px'
    },
    icon: {
        width: 18,
        height: 18,
    },
    cover: {
        width: '150px !important'
    }
})

class CameraItem extends Component{
    render(){
        const { classes, detail, isSitemap, isManageCam } = this.props
        return(
            <Card className={classes.card}>
                <CardMedia 
                    className={classes.cover}
                    image={detail.snapshot_image}
                    title={detail.name}
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <p className={classes.camName}>{detail.name}</p>
                        <p>{detail.address}</p>
                        {/* <Typography variant="subtitle1" color="textSecondary">
                            Phường Bình Thuận, Quận Hải Châu, TP Đà Nẵngfawfawfawfawfaww
                        </Typography> */}
                    </CardContent>
                    <div className={classes.controls}>
                        { isManageCam &&
                            <Fragment>
                                <IconButton className={classes.iconButton}>
                                    <SettingsIcon  className={classes.icon}/>
                                </IconButton>
                                <IconButton className={classes.iconButton}>
                                    <DeleteIcon className={classes.icon}/>
                                </IconButton>
                            </Fragment>
                        }
                        { isSitemap && 
                            <Fragment>
                                <IconButton className={classes.iconButton}>
                                    <InfoOutlined  className={classes.icon}/>
                                </IconButton>
                                <IconButton className={classes.iconButton}>
                                    <RemoveRedEyeOutlined className={classes.icon}/>
                                </IconButton>
                            </Fragment>
                        }
                        
                    </div>
                </div>
            </Card>
        )
    }
}

export default withStyles(styles)(CameraItem)