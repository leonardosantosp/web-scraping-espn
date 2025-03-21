import { z } from 'zod'
import { playerSchema } from './schemas.js'
import { getTeamById } from '../repository/get_team_by_id.js'
import { getPlayerInTeam } from '../repository/get_player_in_team.js'
import { formatPlayerData } from '../utils/formatters.js'

export const getPlayerInTeamRoute = async app => {
  app.get(
    '/teams/:teamId/players/:playerId',
    {
      schema: {
        description: 'Retrievea specific player from a team by player ID',
        summary: 'GET a player from a team by ID',
        tags: ['teams, players'],
        params: z.object({
          teamId: z.string(),
          playerId: z.string()
        }),
        response: {
          200: playerSchema
        }
      }
    },
    async (request, reply) => {
      const { teamId, playerId } = request.params
      const team = await getTeamById(teamId)
      console.log('team', team)
      const player = await getPlayerInTeam(teamId, playerId)
      console.log('player', player)
      const formatedPlayerData = formatPlayerData(player)
      console.log('formatedPlayerData', formatedPlayerData)
      try {
        if (!team) {
          return reply.status(404).send({ message: 'Team not Found!' })
        }
        if (!player) {
          return reply.status(404).send({ message: 'Player not Found!' })
        }
        return reply.status(200).send(formatedPlayerData)
      } catch (error) {
        return reply.status(500).send({ messasge: 'Internal server error!' })
      }
    }
  )
}
