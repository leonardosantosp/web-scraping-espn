import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getTeamById } from '../../api/teamsApi.js'
import { getPlayersInTeam } from '../../api/playersApi.js'
import nbaLogo from '../assets/NBALogo.png'
import { Link } from 'react-router-dom'

export const Team = () => {
  const { id } = useParams()
  const [team, setTeam] = useState([])
  const [players, setPlayers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTeamById(id)
        setTeam(data)
        const dataPlayers = await getPlayersInTeam(id)
        setPlayers(dataPlayers)
      } catch (error) {
        console.error('Erro ao buscar dados do time', error)
      }
    }
    fetchData()
  }, [id])

  return (
    <div className="team">
      <div className="team__header">
        <Link to={`/teams/${team._id}`}>
          <img src={team.image_link} alt={`Logo do time ${team.time}`} />
        </Link>
        <h2>{team.time}</h2>
      </div>
      <div className="table-container">
        <div className="table-card">
          <div className="header-table">
            <h1>Elenco {team.time}</h1>
            <img className="table-logo" src={nbaLogo} alt="" />
          </div>

          <table>
            <thead>
              <tr>
                <th> </th>
                <th>NOME</th>
                <th>POSIÇÃO</th>
                <th>IDADE</th>
                <th>ALTURA</th>
                <th>PESO</th>
                <th>UNIVERSIDADE</th>
                <th>SALÁRIO</th>
              </tr>
            </thead>

            <tbody>
              {players.map(player => (
                <tr key={player._id}>
                  <td>
                    <img
                      className="team__player-image"
                      src={player.image}
                      alt={`Imagem do jogador ${player.name}`}
                    />
                  </td>
                  <td className="team__player-name">
                    <Link to={`/players/${player._id}`}>
                      {player.name} <span>{player.number}</span>
                    </Link>
                  </td>
                  <td>{player.position}</td>
                  <td>{player.age}</td>
                  <td>{player.height}</td>
                  <td>{player.weight}</td>
                  <td>{player.university}</td>
                  <td>{player.salary}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="8" className="team__technical">
                  Técnico: {team.technical}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  )
}
