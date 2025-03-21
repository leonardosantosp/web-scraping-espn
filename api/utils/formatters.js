import mongoose from 'mongoose'

export function formatPlayerData(player) {
  return {
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
  }
}

export function formatPlayersData(players) {
  return players.map(player => {
    return formatPlayerData(player)
  })
}

export function formatTeamData(team) {
  return {
    _id: mongoose.Types.ObjectId.isValid(team._id) ? team._id.toString() : null,
    time: team.time,
    technical: team.technical,
    image_link: team.image_link
  }
}

export function formatTeamsData(teams) {
  return teams.map(team => {
    return formatTeamData(team)
  })
}
