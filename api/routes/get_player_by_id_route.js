import { z } from 'zod'
import { playerSchema } from './schemas.js'
import { getPlayerById } from '../repository/get_player_by_id.js'
import mongoose from 'mongoose'

function formatPlayerData(player) {
  return {
    _id: mongoose.Types.ObjectId.isValid(player._id)
      ? player._id.toString()
      : null,
    image: player.image || '',
    name: player.name,
    number: player.number || '',
    position: player.position || '',
    age: player.age || '',
    height: player.height || '',
    weight: player.weight || '',
    university: player.university || '',
    salary: player.salary || '',
    team_id: player.team_id.toString()
  }
}

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
