import Player from '../models/Player.js'

export async function getPlayerById(id) {
  return Player.findById(id)
}
