import { getAllTeams } from '../functions/get_all_teams.js'
import { z } from 'zod'

export const getAllTeamsRoute = async app => {
  app.get(
    '/teams',
    {
      schema: {
        summary: 'Get All teams',
        tags: ['teams'],
        description: 'Get All NBA teams in mongodb',
        response: {
          200: z.array(
            z.object({
              _id: z.string(),
              time: z.string(),
              technical: z.string(),
              image_link: z.string()
            })
          )
        }
      }
    },
    async (request, reply) => {
      try {
        const teams = await getAllTeams()
        return reply.status(200).send(teams)
      } catch (error) {
        console.error('Erro ao buscar times:', err)
        return reply.status(500).send({ error: 'Erro ao buscar times' })
      }
    }
  )
}
