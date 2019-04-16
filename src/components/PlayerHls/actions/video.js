const WAITING = 'WAITING'
const PLAY = 'PLAY'
const PAUSE = 'PAUSE'
const PLAYING = 'PLAYING'
export function handleWaiting(){
  return {
    type: WAITING
  }
}

export function handlePlaying(){
  return {
    type: PLAYING
  }
}

export function handlePlay(){
  return {
    type: PLAY
  }
}

export function handlePause(){
  return {
    type: PAUSE
  }
}