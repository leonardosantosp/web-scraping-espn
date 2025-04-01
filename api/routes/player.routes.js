import {
  getAllPlayersController,
  getPlayerByIdController,
  getPlayersByTeamController
} from '../controllers/player.controller.js'

import { playerSchema } from './schemas.js'
import { z } from 'zod'

export function playerRoutes(app) {
  app.get(
    '/players',
    {
      schema: {
        description: 'Get all players in a NBA team',
        summary: 'Get all players',
        tags: ['players'],
        response: {
          200: z.array(playerSchema),
          500: z.object({
            message: z.string(),
            error: z.string()
          })
        }
      }
    },
    getAllPlayersController
  )

  app.get(
    '/players/:id',
    {
      schema: {
        description:
          'Retrieves a player from the "Players" schema by its unique ID.',
        summary: 'Get Player by id',
        tags: ['players'],
        params: z.object({
          id: z.string()
        }),
        response: {
          200: playerSchema,
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
    getPlayerByIdController
  )

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
          200: z.array(playerSchema),
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
    getPlayersByTeamController
  )
}
