import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

class PlayToggle extends Component{

    handleClick = (e) => {
        e.stopPropagation()
        this.props.handlePlayOrPause()
        this.props.handleNotLive()
        const { video, src } = this.props
        
        if(video.video.paused){
            console.log('video is play 1')
            video.video.play()
            video.hls.attachMedia(video.video)
            // video.hls.on('hlsMediaAttached', () => {
            //     video.hls.loadSource(src)
            //     console.log('MEDIA_ATTACHED AGAIN')
            // })
            // video.hls.on('hlsManifestParsed', () => {
            //     console.log('MANIFEST_PARSED')
            //     video.video.play()
            //     console.log('play success')
            // })
            // this.props.video.hls.startLoad()
        }else{
            console.log('video is pause')
            
            video.video.pause()
            video.hls.stopLoad()
            // video.hls.detachMedia()
        }
    }
    render(){
        
        const { isPaused } = this.props
        return (
            <div className="video-control__play video-controls__tip-btn video-control__play--pause">
                <button className="btn-action play" onClick={this.handleClick}>
                    <FontAwesomeIcon icon={isPaused ? faPlay : faPause} />
                </button>
                <div className="video-controls__title-tip">
                    {isPaused ? "Play" : "Pause"}
                </div>
            </div>  
        )
    }
}

export default PlayToggle