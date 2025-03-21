import { z } from 'zod'
import { getAllPlayers } from '../repository/get_all_players.js'
import { playerSchema } from './schemas.js'
import { formatPlayersData } from '../utils/formatters.js'

export const getAllPlayersRoute = async app => {
  app.get(
    '/players',
    {
      schema: {
        summary: 'Get all players',
        tags: ['players'],
        description: 'Get all players in a NBA team',
        response: {
          200: z.array(playerSchema)
        }
      }
    },
    async (request, reply) => {
      try {
        const players = await getAllPlayers()
        const formatedPlayers = formatPlayersData(players)
        return reply.status(200).send(formatedPlayers)
      } catch (error) {
        console.error('Erro ao buscar os jogadores: ', error)
        return reply.status(500).send({ error: 'Erro ao buscar times' })
      }
    }
  )
}
