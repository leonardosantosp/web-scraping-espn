import { z } from 'zod'
import { getAllPlayers } from '../repository/get_all_players.js'
import mongoose from 'mongoose'
import { playerSchema } from './schemas.js'

function formatPlayersData(players) {
  return players.map(player => ({
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
  }))
}

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
