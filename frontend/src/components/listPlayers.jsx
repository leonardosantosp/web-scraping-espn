import { useState, useEffect } from 'react'
import { getPlayers } from '../../api/playersApi.js'
import { PlayerItem } from '../components/PlayerItem.jsx'

export const ListPlayers = () => {
  const [players, setPlayers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const data = await getPlayers()
        setPlayers(data)
      } catch (error) {
        console.error('Erro ao buscar players:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchPlayers()
  }, [])

  if (loading) {
    return <div>loading...</div>
  }

  return (
    <div className="list-container">
      <div className="list-players">
        <h2 className="list-players__title"> Jogadores </h2>
        {players.map(player => (
          <PlayerItem player={player} key={player._id} />
        ))}
      </div>
    </div>
  )
}
