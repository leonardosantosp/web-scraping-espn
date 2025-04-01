import Player from '../models/Player.js'

export async function getAllPlayers() {
  return Player.find()
}

export async function getPlayerById(id) {
  return Player.findById(id)
}

export async function getPlayersByTeam(teamId) {
  return Player.find({ team_id: teamId })
}
