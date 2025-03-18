import Team from '../models/Team.js'

export async function getAllTeams() {
  return Team.find()
}
