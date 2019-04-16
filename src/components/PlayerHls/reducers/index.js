import player from './player'

export default function (state = {}, action) {
  return {
    player: player(state.player, action)
  }
}

export const playerReducer = player