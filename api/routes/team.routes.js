import {
  getAllTeamsController,
  getTeamByIdController
} from '../controllers/team.controller.js'

import { teamSchema } from './schemas.js'
import { z } from 'zod'

export function teamRoutes(app) {
  app.get(
    '/teams',
    {
      schema: {
        description: 'Get All NBA teams in mongodb',
        summary: 'Get All teams',
        tags: ['teams'],
        response: {
          200: z.array(teamSchema),
          500: z.object({
            message: z.string(),
            error: z.string()
          })
        }
      }
    },
    getAllTeamsController
  )

  app.get(
    '/teams/:id',
    {
      schema: {
        description:
          'Retrieves a team from the "Teams" schema by its unique ID.',
        summary: 'Get team by ID',
        tags: ['teams'],
        params: z.object({
          id: z.string()
        }),
        response: {
          200: teamSchema,
          400: z.object({
            message: z.string(),
            error: z.string().optional()
          }),
          404: z.object({
            message: z.string(),
            error: z.string().optional()
          }),
          500: z.object({
            message: z.string(),
            error: z.string()
          })
        }
      }
    },
    getTeamByIdController
  )
}
