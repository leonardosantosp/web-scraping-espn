import Player from '../models/Player.js'

export async function getPlayerInTeam(teamId, playerId) {
  return Player.findOne({ _id: playerId, team_id: teamId })
}
