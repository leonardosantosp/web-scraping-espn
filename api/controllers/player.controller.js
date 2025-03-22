import {
  getAllplayersService,
  getPlayerByIdService,
  getPlayersByTeamService,
  getPlayerInTeamByIdService
} from '../services/player.service.js'

import mongoose from 'mongoose'
import { getTeamByIdService } from '../services/team.service.js'

export const getAllPlayersController = async (request, reply) => {
  try {
    const players = await getAllplayersService()
    return reply.status(200).send(players)
  } catch (error) {
    console.error('Error while retrieving all players:', error)
    return reply.status(500).send({ error: 'Error while retrieving players' })
  }
}

export const getPlayerByIdController = async (request, reply) => {
  try {
    const { id } = request.params

    if (!mongoose.isValidObjectId(id)) {
      return reply.status(400).send({ message: 'Id is invalid!' })
    }

    const player = await getPlayerByIdService(id)

    if (!player) {
      return reply
        .status(404)
        .send({ message: 'No player found for this team', error: 'Not Found' })
    }

    return reply.status(200).send(player)
  } catch (error) {
    console.error('Error while retrieving player:', error)
    return reply.status(500).send({ error: 'Error while retrieving player' })
  }
}

export const getPlayersByTeamController = async (request, reply) => {
  try {
    const { teamId } = request.params

    if (!mongoose.isValidObjectId(teamId)) {
      return reply.status(400).send({ message: 'Id is invalid!' })
    }

    const players = await getPlayersByTeamService(teamId)

    if (!players || players.length === 0) {
      return reply
        .status(404)
        .send({ message: 'Team not found', error: 'Not Found' })
    }

    return reply.status(200).send(players)
  } catch (error) {
    console.error('Error while retrieving Players: ', error)
    return reply.status(500).send({ error: 'Error while retrieving Players' })
  }
}

export const getPlayerInTeamByIdController = async (request, reply) => {
  try {
    const { teamId, id } = request.params

    if (!mongoose.isValidObjectId(teamId) || !mongoose.isValidObjectId(id)) {
      return reply.status(400).send({ message: 'Id is invalid!' })
    }

    const player = await getPlayerInTeamByIdService(id, teamId)
    const team = await getTeamByIdService(teamId)

    if (!team) {
      return reply.status(404).send({ message: 'team not found' })
    }

    if (!player) {
      return reply.status(404).send({ message: 'player not found' })
    }
    return reply.status(200).send(player)
  } catch (error) {
    console.error('Error while retrieving Player:', error)
    return reply.status(500).send({ error: 'Error while retrieving Player' })
  }
}
