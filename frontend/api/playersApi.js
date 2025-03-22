import { API } from './api.js'

export const getPlayers = async () => {
  const response = await API.get('/players')
  return response.data
}

export const getPlayerById = async id => {
  const response = await API.get(`/players/${id}`)
  return response.data
}

export const getPlayersInTeam = async teamId => {
  const response = await API.get(`/teams/${teamId}/players`)
  return response.data
}

export const getPlayerByIdInTeam = async (teamId, id) => {
  const response = await API.get(`/teams/${teamId}/players/${id}`)
  return response.data
}
