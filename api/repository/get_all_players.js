import Player from '../models/Player.js'

export async function getAllPlayers(filters = {}) {
  return Player.find(filters)
}
