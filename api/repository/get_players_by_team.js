import Player from '../models/Player.js'

export async function getPlayersByTeamId(teamId) {
  return Player.find({ team_id: teamId })
}
