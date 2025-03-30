import { ListPlayers } from '../components/listPlayers'
import { useEffect, useState } from 'react'
import { getPlayers } from '../../api/playersApi.js'

export const Players = () => {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const data = await getPlayers()
        setPlayers(data)
      } catch (error) {
        console.error('Erro ao buscar players:', error)
      }
    }
    fetchPlayers()
  }, [])

  return <ListPlayers players={players} />
}
