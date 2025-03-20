import Team from '../models/Team.js'

export async function getTeamById(id) {
  try {
    const team = await Team.findById(id)
    if (!team) {
      throw new Error('Team not found')
    }
    return team
  } catch (error) {
    throw new Error(`Error fetching team: ${error.message}`)
  }
}
