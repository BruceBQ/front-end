

const initialState = {
  paused: true,
  isFullscreen: false,
  buffered: null,
  waiting: true,
}

const player = (state = initialState, action) => {
  switch(action.type){
    case 'FULLSCREEN_CHANGE':
      return {
        ...state,
        isFullscreen: !!action.isFullscreen
      }
    case 'WAITING': 
      return {
        ...state,
        waiting: true
      }
    case 'PLAYING':
      return {
        ...state,
        waiting: false
      }
    case 'PLAY':
      return {
        ...state,
        paused: false,
        waiting: false
      }
    case 'PAUSE':
      return {
        ...state,
        paused: true
      }
    default:
      return state
  }
}

export default player