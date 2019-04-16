import fullscreen from '../utils/fullscreen'
export const FULLSCREEN_CHANGE = 'FULLSCREEN_CHANGE'
export const OPERATE = 'OPERATE'

export function handleFullscreenChange(isFullscreen){
  return {
    type: FULLSCREEN_CHANGE,
    isFullscreen
  }
}

export function toggleFullscreen(player, rootEl){
  if(fullscreen.enabled){
    if(fullscreen.isFullscreen){
      fullscreen.exit()
    } else {
      fullscreen.request(rootEl)
    }
    return {
      type: OPERATE,
      operation: {
        action: 'toggle-fullscreen'
      }
    }
  }
  return {
    type: FULLSCREEN_CHANGE,
    isFullscreen: !player.isFullscreen
  }
}

