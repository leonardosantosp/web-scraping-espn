import { z } from 'zod'
import { playerSchema } from './schemas.js'
import { getPlayerById } from '../repository/get_player_by_id.js'
import { formatPlayerData } from '../utils/formatters.js'

export const getPlayerByIdRoute = async app => {
  app.get(
    '/players/:id',
    {
      schema: {
        summary: 'Get Player by id',
        tags: ['players'],
        description:
          'Retrieves a player from the "Players" schema by its unique ID.',
        params: z.object({
          id: z.string()
        }),
        response: {
          200: playerSchema
        }
      }
    },
    async (request, reply) => {
      try {
        const { id } = request.params
        const player = await getPlayerById(id)

        if (!player) {
          return reply.status(404).send({ message: 'Player Not Found!' })
        }

        const formatedPlayerData = formatPlayerData(player)
        return reply.status(200).send(formatedPlayerData)
      } catch (error) {
        return reply.status(500).send({ message: 'Internal server error' })
      }
    }
  )
}
