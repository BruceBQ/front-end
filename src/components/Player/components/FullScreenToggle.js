import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand, faCompress } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import fullscreen from '../utils/fullscreen'

class FullScreenToggle extends Component{
    
    componentDidMount(){
        
    }
    
    handleClick = (e) => {
        e.stopPropagation()
        this.props.toggleFullScreen()
    }

    render(){
        
        const  { isFullScreen } = this.props
        return(
            <div className="video-control__fullscreen video-controls__tip-btn">
                <button className="btn-action fullscreen" onClick={this.handleClick}>
                    <FontAwesomeIcon icon={ isFullScreen ? faCompress: faExpand} />
                </button>
                <div className="video-controls__title-tip">
                    {isFullScreen ? "Thoát Toàn Màn Hình" : "Toàn Màn Hình"}
                </div>
            </div>
        )
    }
}

export default FullScreenToggle