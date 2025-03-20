import { getAllTeams } from '../repository/get_all_teams.js'
import { z } from 'zod'
import mongoose from 'mongoose'
import { teamSchema } from './schemas.js'

function formatTeamsData(teams) {
  return teams.map(team => ({
    _id: mongoose.Types.ObjectId.isValid(team._id) ? team._id.toString() : null,
    time: team.time,
    technical: team.technical,
    image_link: team.image_link
  }))
}

export const getAllTeamsRoute = async app => {
  app.get(
    '/teams',
    {
      schema: {
        summary: 'Get All teams',
        tags: ['teams'],
        description: 'Get All NBA teams in mongodb',
        response: {
          200: z.array(teamSchema)
        }
      }
    },
    async (request, reply) => {
      try {
        const teams = await getAllTeams()
        const formatedTeamsData = formatTeamsData(teams)

        return reply.status(200).send(formatedTeamsData)
      } catch (error) {
        console.error('Erro ao buscar times:', error)
        return reply.status(500).send({ error: 'Erro ao buscar times' })
      }
    }
  )
}
