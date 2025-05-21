// Hooks, Components
import { ListPlayers } from '../components/ListPlayers'
import { useEffect, useState, useCallback } from 'react'

//API Functions
import { getPlayers } from '../../api/playersApi.js'

export const Players = () => {
  const [players, setPlayers] = useState([])
  const [visiblePlayers, setVisiblePlayers] = useState(5)

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const data = await getPlayers()
        const sortedPlayers = data.sort((a, b) =>
          a.team_id.localeCompare(b.team_id)
        )
        setPlayers(sortedPlayers)
      } catch (error) {
        console.error('Erro ao buscar players:', error)
      }
    }
    fetchPlayers()
  }, [])

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 100
    ) {
      setVisiblePlayers(prev => prev + 5)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return <ListPlayers players={players.slice(0, visiblePlayers)} />
}
