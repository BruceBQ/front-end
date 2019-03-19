import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import CameraItem from './CameraItem'
import { Scrollbars } from 'react-custom-scrollbars';

const styles  = theme => ({
    root: {
        padding: '5px 0 5px 10px',
        flexGrow: '1',
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        fontWeight: '500'
    },
    cameraList: {
        flexGrow: '1',
        paddingTop: 5,
    }
})

class SearchResult extends Component{
    render(){
        const { classes ,isSitemap, isManageCam } = this.props
        return(
            <div className={classes.root}>
                <div className={classes.title}>DANH SÁCH CAMERA</div>

                <div className={classes.cameraList}>
                <Scrollbars style={{width: '100%', height: '100%'}}>
                    <CameraItem  
                        detail={{
                            name: 'Camera 231',
                            address: '02 Tuệ Tĩnh, Bình Thuận, Hải Châu, Đà Nẵng',
                            snapshot_image: 'http://10.49.46.12:3000/231.jpeg'
                        }}
                        isSitemap={isSitemap}
                        isManageCam={isManageCam}
                    />
                    <CameraItem 
                        detail={{
                            name: 'Camera 233',
                            address: '230 Trưng Nữ Vương, Bình Thuận, Hải Châu, Đà Nẵng',
                            snapshot_image: 'http://10.49.46.12:3000/233.jpeg'
                        }}
                        isSitemap={isSitemap}
                        isManageCam={isManageCam}
                    />
                    <CameraItem 
                        detail={{
                            name: 'Camera 235',
                            address: '08 Núi Thành, Bình Thuận, Hải Châu, Đà Nẵng',
                            snapshot_image: 'http://10.49.46.12:3000/235.jpeg'
                        }}
                        isSitemap={isSitemap}
                        isManageCam={isManageCam}
                    />
                    <CameraItem 
                        detail={{
                            name: 'Camera 237',
                            address: '256 Trưng Nữ Vương, Bình Thuận, Hải Châu, Đà Nẵng',
                            snapshot_image: 'http://10.49.46.12:3000/237.jpeg'
                        }}
                        isSitemap={isSitemap}
                        isManageCam={isManageCam}
                    />
                    <CameraItem 
                        detail={{
                            name: 'Camera 221',
                            address: 'Hòa Phong, Hòa Vang, Đà Nẵng',
                            snapshot_image: 'http://10.49.46.12:3000/221.jpeg'
                        }}
                        isSitemap={isSitemap}
                        isManageCam={isManageCam}
                    />
                    <CameraItem 
                        detail={{
                            name: 'Camera 223',
                            address: 'Hòa Phong, Hòa Vang, Đà Nẵng',
                            snapshot_image: 'http://10.49.46.12:3000/223.jpeg'
                        }}
                        isSitemap={isSitemap}
                        isManageCam={isManageCam}
                    />
                    <CameraItem 
                        detail={{
                            name: 'Camera 225',
                            address: 'Hòa Phong, Hòa Vang, Đà Nẵng',
                            snapshot_image: 'http://10.49.46.12:3000/225.jpeg'
                        }}
                        isSitemap={isSitemap}
                        isManageCam={isManageCam}
                    />
                    <CameraItem 
                        detail={{
                            name: 'Camera 227',
                            address: 'Hòa Phong, Hòa Vang, Đà Nẵng',
                            snapshot_image: 'http://10.49.46.12:3000/227.jpeg'
                        }}
                        isSitemap={isSitemap}
                        isManageCam={isManageCam}
                    />
                </Scrollbars>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(SearchResult) 