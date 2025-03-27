import React, { useState, useEffect } from 'react'
import { getTeams } from '../../api/teamsApi.js'
import { Link } from 'react-router-dom'

export const ListTeams = () => {
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const data = await getTeams()
        console.log(data)
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
          <Link to={`/teams/${team._id}`} key={team._id}>
            <div className="list-teams__team" key={team._id}>
              <img
                className="list-teams__team-image"
                src={team.image_link}
                alt={`Logo do ${team.time}`}
              />
              <h3 className="list-teams__team-name">{team.time}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
