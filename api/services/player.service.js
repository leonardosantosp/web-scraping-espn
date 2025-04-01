import {
  getAllPlayers,
  getPlayerById,
  getPlayersByTeam
} from '../repository/player.repository.js'

import { formatPlayerData, formatPlayersData } from '../utils/formatters.js'

export async function getAllplayersService() {
  try {
    const players = await getAllPlayers()
    return formatPlayersData(players)
  } catch (error) {
    throw new Error('Error while fetching players')
  }
}

export async function getPlayerByIdService(id) {
  try {
    const player = await getPlayerById(id)
    if (!player) {
      return null
    }
    return formatPlayerData(player)
  } catch (error) {
    throw new Error('Error while fetching player')
  }
}

export async function getPlayersByTeamService(teamId) {
  try {
    const players = await getPlayersByTeam(teamId)
    if (!players) {
      return null
    }
    return formatPlayersData(players)
  } catch (error) {
    throw new Error('Error while fetching players')
  }
}
