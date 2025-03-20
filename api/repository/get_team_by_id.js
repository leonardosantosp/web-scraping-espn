import Team from '../models/Team.js'

export async function getTeamById(id) {
  return Team.findById(id)
}
