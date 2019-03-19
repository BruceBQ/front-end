import React, { Component } from 'react';
import Hls from 'hls.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCog, faEye, faExpand, faPlay, faPause, faCompress } from '@fortawesome/free-solid-svg-icons'

class Player extends Component{
    constructor(props){
        super(props)
        this.hls = new Hls()
        this.state = {
            width: 0,
            height: 0,
            showControls: false,
            play: true,
        }
        this.video = null
    }
    saveRef = (ref) => this.player = ref
    componentDidMount(){
        if(Hls.isSupported() && this.player){
            const video = this.player
            this.hls.loadSource(this.props.streamURL)
            this.hls.attachMedia(video)
            this.hls.on(Hls.Events.MANIFEST_PARSED,function() {
                // this.player.play();
                video.play()
            });
        }
    }

    componentWillUnmount(){
        if(this.hls){
            this.hls.destroy()
        }
    }

    showControls = () => {
        this.setState({
            showControls: true
        })
    }
    hideControls = () => {
        this.setState({
            showControls: false
        })
    }
    playOrPause = (e) => {
        const video = this.player
        this.setState({
            play: !this.state.play
        })
        if(video.paused){
            video.play()
        }else{
            video.pause()
        }
    }
    requestFullScreen = (e) => {
        const video = this.player
        if (video.requestFullscreen) {
            video.requestFullscreen();
          } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
          } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
          } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
        if(video.requestFullScreen || video.webkitRequestFullscreen || video.msRequestFullscreen){
            
        }
    }
    render(){
        let height
        if(this.player){
            height=( parseInt(this.player.clientWidth)/16)*9
        }
        
        return(
            <div id="player" className="centic-player" ref={this.wrapper}>
                <div className="html5-video-container" style={{backgroundColor: 'rgba(#000, .5)'}}
                    onMouseEnter={this.showControls}
                    onMouseLeave={this.hideControls}
                > 
                    <video className="video-stream html5-main-video" 
                        controls={false} 
                        ref={this.saveRef} 
                        height={height} 
                        autoPlay={false} 
                        onMouseEnter={this.showControls}
                        onMouseLeave={this.hideControls}
                    ></video>
                    {/* <img className="video-stream html5-main-video" src={this.props.streamURL} ref={player => this.player = player}/> */}
                    {(this.state.showControls || true) && <div className="controls-player">
                        <div className="controls-wrapper">
                            <div className="left-action">
                                <ul>
                                    <li>
                                        <button className="button-action play-pause-button" 
                                            onClick={this.playOrPause}
                                            title="Play"
                                        >
                                            <FontAwesomeIcon icon={this.state.play ? faPause : faPlay} /></button></li>
                                </ul>
                            </div>
                            <div className="right-action">
                                <ul>
                                    <li>
                                        <button className="button-action">
                                            <FontAwesomeIcon icon={faEye} />
                                        </button>
                                    </li>
                                    <li>
                                        <button className="button-action" onClick={this.requestFullScreen}>
                                            <FontAwesomeIcon icon={faExpand} />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        )
    }
}

export default Player