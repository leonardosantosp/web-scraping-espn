import Team from '../models/Team.js'

export async function getAllTeams(filters = {}) {
  return Team.find(filters)
}
