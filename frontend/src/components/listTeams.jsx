import React, { useState, useEffect } from 'react'
import { getTeams } from '../../api/teamsApi.js'
import { TeamItem } from './TeamItem.jsx'

export const ListTeams = () => {
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const data = await getTeams()
        setTeams(data)
      } catch (error) {
        console.error('Erro ao buscar times:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchTeams()
  }, [])

  if (loading) {
    return <div className="list-teams__loading">carregando...</div>
  }

  return (
    <div className="list-container">
      <div className="list-teams">
        <h2 className="list-teams__title">Times</h2>
        {teams.map(team => (
          <TeamItem team={team} key={team._id} />
        ))}
      </div>
    </div>
  )
}
