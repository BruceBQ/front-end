import React, { Component } from 'react';
import Video from './Video'
import ControlBar from './ControlBar'
import LoadingSpinner from './LoadingSpinner'
import PropTypes from 'prop-types'
import fullscreen from '../utils/fullscreen'
import Hls from 'hls.js'

const propTypes = {
    streamURL: PropTypes.string,

}

class Player extends Component{
    constructor(props){
        super(props)
        this.state = {
            isShowControls: false,
            isPaused: false,
            isFullScreen: false,
            isLive: true,
            isReload: false
        }
        this.video = React.createRef()
        this.player = React.createRef()
    }

    static defaultProps = {
        aspectRatio: 'auto'
    }

    getBuffer = () => {
        for(let i=0;i<this.video.video.buffered.length; i++){
            console.log(i + ':' +  '[' + this.video.video.buffered.start(i)+' '+this.video.video.buffered.end(i)+']')
        }
        console.log(this.video.video.currentTime)
    }
    componentDidMount(){
        // setInterval(this.getBuffer, 2000)
        window.addEventListener('resize', this.handleResize)
        fullscreen.addEventListener(this.handleFullScreenChange)
    }
    componentWillUnmount(){
        window.removeEventListener('resize', this.handleResize)
        fullscreen.removeEventListener(this.handleFullScreenChange)
    }



    handleResize = () => {}

    handleMouseDown = () => {

    }

    handleMouseMove = () => {
        this.setState({
            isShowControls: true
        })
    }

    handleMouseLeave = () => {
        this.setState({
            isShowControls: false
        })
    }

    handleFocus = () => {
        
    }

    handleBlur = () => {

    }

    handleFullScreenChange = () => {
        this.setState({
            isFullScreen: !this.state.isFullScreen
        })
        // const player = this.player.current
        // if(fullscreen.isFullscreen){
        //     console.log('full')
        //     fullscreen.exit()
        // }else{
        //     console.log('exit')
        //     fullscreen.request(player)
        // }
    }
    toggleFullScreen = () => {
        const player = this.player.current
        if(fullscreen.isFullscreen){
            fullscreen.exit()
        }else{
            fullscreen.request(player)
        }
    }

    handlePlayOrPause = () => {
        this.setState({
            isPaused: !this.state.isPaused
        })
    }

    handleLive = () => {
        this.setState({
            isLive: true
        })
    }

    handleNotLive = () => {
        this.setState({
            isLive: false
        })
    }

    handleReload = () => {
        this.video.hls.on(Hls.Events.ERROR, (event, data) => {
            console.log(event)
            console.log(data)
        })
    }

    render(){
        return(
            <div className="video-player"
                onMouseDown={this.handleMouseDown}
                onMouseMove={this.handleMouseMove}
                onMouseLeave={this.handleMouseLeave}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                ref={this.player}
            >
                <Video 
                    streamURL={this.props.streamURL} 
                    ref={video => this.video = video}    
                />
                <ControlBar
                    isPaused={this.state.isPaused}
                    isLive={this.state.isLive}
                    isShowControls={this.state.isShowControls}
                    isFullScreen={this.state.isFullScreen}
                    handlePlayOrPause={this.handlePlayOrPause}
                    toggleFullScreen={this.toggleFullScreen}
                    handlePlay={this.handlePlay}
                    handleLive={this.handleLive}
                    handleNotLive={this.handleNotLive}
                    video={this.video}
                    player={this.player}
                    handleReload={this.handleReload}
                    src={this.props.streamURL}
                />
                {/* <div className="real-player">
                    <div className="real-player__content-container">
                        <div className="player-live">
                            <div className="centic-video-container">
                        
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default Player