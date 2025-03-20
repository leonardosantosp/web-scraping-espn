import { getTeamById } from '../repository/get_team_by_id.js'
import { z } from 'zod'
import mongoose from 'mongoose'
import { teamSchema } from './schemas.js'

function formatTeamData(team) {
  return {
    _id: mongoose.Types.ObjectId.isValid(team._id) ? team._id.toString() : null,
    time: team.time,
    technical: team.technical,
    image_link: team.image_link
  }
}

export const getTeamByIdRoute = async app => {
  app.get(
    '/teams/:id',
    {
      schema: {
        summary: 'Get team by ID',
        tags: ['teams'],
        description:
          'Retrieves a team from the "Teams" schema by its unique ID.',
        params: z.object({
          id: z.string()
        }),
        response: {
          200: teamSchema
        }
      }
    },
    async (request, reply) => {
      try {
        const { id } = request.params
        const team = await getTeamById(id)

        if (!team) {
          return reply.status(404).send({ message: 'Team not found' })
        }

        const formatedTeamData = formatTeamData(team)
        return reply.status(200).send(formatedTeamData)
      } catch (error) {
        console.error(error)
        return reply.status(500).send({ message: 'Internal server error' })
      }
    }
  )
}
