import { useState, useEffect } from 'react'
import { getPlayerById } from '../../api/playersApi.js'
import { getTeamById } from '../../api/teamsApi.js'
import assinatura from '../assets/Assinatura.png'
import prancheta from '../assets/prancheta.png'
import { useParams } from 'react-router-dom'

export const Player = () => {
  const { id } = useParams()
  const [player, setPlayer] = useState([])
  const [team, setTeam] = useState([])

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const data = await getPlayerById(id)
        setPlayer(data)
        const dataTeam = await getTeamById(data.team_id)
        setTeam(dataTeam)
      } catch (error) {
        console.error('Erro ao buscar Jogador: ', error)
      }
    }
    fetchTeam()
  }, [id])

  return (
    <div className="player-container">
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
              <img src={team.image_link} alt={`Logo do time ${team.name}`} />
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
    </div>
  )
}
