import Team from '../models/Team.js'

export async function getAllTeams() {
  return Team.find()
}

export async function getTeamById(id) {
  return Team.findById(id)
}
