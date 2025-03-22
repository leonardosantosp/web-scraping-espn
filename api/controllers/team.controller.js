import {
  getAllTeamsService,
  getTeamByIdService
} from '../services/team.service.js'

import mongoose from 'mongoose'

export const getAllTeamsController = async (request, reply) => {
  try {
    const teams = await getAllTeamsService()
    return reply.status(200).send(teams)
  } catch (error) {
    console.error('Error while retrieving all teams:', error)
    return reply.status(500).send({ error: 'Error while retrieving players' })
  }
}

export const getTeamByIdController = async (request, reply) => {
  try {
    const { id } = request.params

    if (!mongoose.isValidObjectId(id)) {
      return reply.status(400).send({ message: 'Id is invalid!' })
    }

    const team = await getTeamByIdService(id)

    if (!team) {
      return reply
        .status(404)
        .send({ message: 'team not found', error: 'Not Found' })
    }

    return reply.status(200).send(team)
  } catch (error) {
    console.error('Error while retrieving Team!', error)
    return reply.status(500).send({ error: 'Error while retrieving team' })
  }
}
