import React, { Component } from 'react'
import Source from './Source'
import Hls from 'hls.js'

class Video extends Component {
  constructor(props) {
    super(props)
    this.video = React.createRef()
    this.hls = new Hls({
      liveBackBufferLength: 0,
      maxMaxBufferLength: 10,
    })
  }

  componentDidMount() {
    if (Hls.isSupported()) {
      console.log(Hls.version)
      const video = this.video
      const { streamURL } = this.props
      this.hls.attachMedia(video)
      this.hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        console.log('MEDIA_ATTACHED')
        this.hls.loadSource(this.props.streamURL)
      })
      this.hls.on(Hls.Events.MANIFEST_PARSED, function(event, data) {
        console.log('MANIFEST_PARSED')
        video.play()
        console.log('PLAY STREAM SRC=' + streamURL)
      })
      this.hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              this.hls.startLoad()
              break
            case Hls.ErrorTypes.MEDIA_ERROR:
              this.hls.recoverMediaError()
              break
            default:
              this.hls.destroy()
              break
          }
        }
      })
      this.hls.on(Hls.Events.BUFFER_APPENDED, (event, data) => {})
    }
    
    this.video.onError = function(){
      console.log('error')
    }
  }
  componentWillUnmount() {
    if (this.hls) {
      this.hls.destroy()
    }
  }
  render() {
    return (
      <video
        className="centic-video"
        ref={c => (this.video = c)}
      />
    )
  }
}

export default Video
