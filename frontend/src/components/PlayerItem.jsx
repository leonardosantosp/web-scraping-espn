import { getTeamById } from '../../api/teamsApi.js'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const PlayerItem = ({ player }) => {
  const [team, setTeam] = useState(null)

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const data = await getTeamById(player.team_id)
        setTeam(data)
      } catch (error) {
        console.error('erro ao encontrar time', error)
      }
    }

    fetchTeam()
  }, [player])

  // Verifica se o time ainda não foi carregado, retorna uma mensagem de loading
  if (!team) {
    return <div>Loading team...</div>
  }

  return (
    <div>
      <Link className="" to={`/players/${player._id}`} key={player._id}>
        <div className="list-players__player">
          <div className="list-players__team-image">
            <img src={team.image_link} alt={`Logo do time ${team.time}`} />
          </div>
          <img
            className="list-players__player-image"
            src={player.image}
            alt={`Foto do ${player.name}`}
          />
          <h3 className="list-players__player-name">{player.name}</h3>
        </div>
      </Link>
    </div>
  )
}
