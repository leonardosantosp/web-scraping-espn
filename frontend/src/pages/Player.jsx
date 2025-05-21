// Hooks, Components
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Load } from '../components/Load.jsx'

// API Functions
import { getPlayerById } from '../../api/playersApi.js'
import { getTeamById } from '../../api/teamsApi.js'

// Assets
import assinatura from '../assets/Assinatura.png'
import prancheta from '../assets/prancheta.png'

export const Player = () => {
  const { id } = useParams()
  const [player, setPlayer] = useState([])
  const [team, setTeam] = useState([])
  const [isloading, setisLoading] = useState(true)

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const data = await getPlayerById(id)
        setPlayer(data)
        const dataTeam = await getTeamById(data.team_id)
        setTeam(dataTeam)
        setisLoading(false)
      } catch (error) {
        console.error('Erro ao buscar Jogador: ', error)
      }
    }
    fetchPlayer()
  }, [id])

  return (
    <div className="player-container">
      {isloading ? (
        <Load />
      ) : (
        <div className="player">
          <img
            className="clipboard"
            src={prancheta}
            alt="Imagem de uma prancheta"
          />
          <div className="player__content">
            <div className="player__header">
              <div className="player__header-background-image">
                <img src={player.image} alt={`Imagem de ${player.name}`} />
              </div>
              <div className="player__header-team-image">
                <Link to={`/teams/${team._id}`}>
                  <img
                    src={team.image_link}
                    alt={`Logo do time ${team.name}`}
                  />
                </Link>
              </div>
            </div>

            <div className="player__data">
              <p>
                {player.number} {player.name}
              </p>
              <p>Age: {player.age} </p>
              <p>Weigth: {player.weight} </p>
              <p>Height: {player.height} </p>
              <p>Salary: {player.salary} </p>
              <p>Position: {player.position} </p>
              <p>University: {player.university} </p>
            </div>
            <div className="signature-container">
              <img
                className="player__signature"
                src={assinatura}
                alt="Assinatura de Leonardo Paiva"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
