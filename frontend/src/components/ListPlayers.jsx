// Components
import { PlayerItem } from './PlayerItem.jsx'

export const ListPlayers = ({ players }) => {
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
