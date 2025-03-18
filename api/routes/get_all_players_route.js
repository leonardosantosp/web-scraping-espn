import { z } from 'zod'
import { getAllPlayers } from '../functions/get_all_players.js'

export const getAllPlayersRoute = async app => {
  app.get(
    '/players',
    {
      schema: {
        summary: 'Get all players',
        tags: ['players'],
        description: 'Get all players in a NBA team',
        response: {
          200: z.array(
            z.object({
              _id: z.string(),
              image: z.string(),
              name: z.string(),
              number: z.string(),
              position: z.string(),
              age: z.string(),
              height: z.string(),
              weight: z.string(),
              university: z.string(),
              salary: z.string(),
              team_id: z.string()
            })
          )
        }
      }
    },
    async (request, reply) => {
      try {
        const players = await getAllPlayers()
        return reply.status(200).send(players)
      } catch (error) {
        console.error('Erro ao buscar os jogadores: ', err)
        return reply.status(500).send({ error: 'Erro ao buscar times' })
      }
    }
  )
}
