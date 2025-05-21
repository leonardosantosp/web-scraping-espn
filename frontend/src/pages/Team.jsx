// Libraries, Hooks, Components
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ItemTable } from '../components/ItemTable.jsx'
import { ListPlayers } from '../components/ListPlayers.jsx'

// API Functions
import { getTeamById } from '../../api/teamsApi.js'
import { getPlayersInTeam } from '../../api/playersApi.js'

//Assets
import nbaLogo from '../assets/NBALogo.png'
import menu from '../assets/menu.png'
import tabela from '../assets/tabela.png'

export const Team = () => {
  const { id } = useParams()
  const [team, setTeam] = useState({})
  const [players, setPlayers] = useState([])
  const [viewMode, setViewMode] = useState('table')

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
      <div className="option">
        <img
          src={tabela}
          alt="Imagem de tabela"
          onClick={() => setViewMode('table')}
          onKeyDown={e => {
            if (e.key === 't' || e.key === ' ') {
              setViewMode('table')
            }
          }}
          className={viewMode === 'table' ? 'active' : ''}
        />
        <img
          src={menu}
          alt="Imagem de menu"
          onClick={() => setViewMode('menu')}
          onKeyDown={e => {
            if (e.key === 'm') {
              setViewMode('menu')
            }
          }}
          className={viewMode === 'menu' ? 'active' : ''}
        />
      </div>

      {viewMode === 'table' ? (
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
                  <ItemTable
                    id={player._id}
                    image={player.image}
                    name={player.name}
                    number={player.number}
                    position={player.position}
                    age={player.age}
                    height={player.height}
                    weight={player.weight}
                    university={player.university}
                    salary={player.salary}
                    key={player._id}
                  />
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
      ) : (
        <ListPlayers players={players} />
      )}
    </div>
  )
}
