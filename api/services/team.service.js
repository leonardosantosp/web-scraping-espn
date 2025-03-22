import { getAllTeams, getTeamById } from '../repository/team.repository.js'
import { formatTeamData, formatTeamsData } from '../utils/formatters.js'

export async function getAllTeamsService() {
  try {
    const teams = await getAllTeams()
    return formatTeamsData(teams)
  } catch (error) {
    throw new Error('Error while fetching teams')
  }
}

export async function getTeamByIdService(id) {
  try {
    const team = await getTeamById(id)
    if (!team) {
      return null
    }
    return formatTeamData(team)
  } catch (error) {
    throw new Error('Error while fetching teams')
  }
}
