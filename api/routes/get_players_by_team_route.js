import { z } from 'zod'
import { playerSchema } from './schemas.js'
import { getPlayersByTeamId } from '../repository/get_players_by_team.js'
import { formatPlayersData } from '../utils/formatters.js'

export const getPlayersByTeamRoute = async app => {
  app.get(
    '/teams/:teamId/players',
    {
      schema: {
        description:
          'Retrieve all players associated with a specific team by its ID.',
        summary:
          'Get a list of players from a specific team using the team ID.',
        tags: ['players', 'teams'],
        params: z.object({
          teamId: z.string()
        }),
        response: {
          200: z.array(playerSchema)
        }
      }
    },
    async (request, reply) => {
      const { teamId } = request.params
      const players = await getPlayersByTeamId(teamId)
      try {
        if (!players) {
          return reply.status(404).send({ message: 'Team not Found!' })
        }
      } catch (error) {
        return reply.status(500).send({ message: 'Internal Server Error!' })
      }

      const formatedPlayersData = formatPlayersData(players)
      return reply.status(200).send(formatedPlayersData)
    }
  )
}
