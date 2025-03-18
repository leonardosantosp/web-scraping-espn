import Player from '../models/Player.js'

export async function getAllPlayers() {
  return Player.find()
}
