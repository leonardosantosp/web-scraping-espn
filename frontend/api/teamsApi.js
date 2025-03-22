import { API } from './api.js'

export const getTeams = async () => {
  const response = await API.get('/teams')
  return response.data
}

export const getTeamById = async id => {
  const response = await API.get(`/teams/${id}`)
  return response.data
}
