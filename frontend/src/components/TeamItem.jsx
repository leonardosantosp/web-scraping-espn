import { Link } from 'react-router-dom'

export const TeamItem = ({ team }) => {
  return (
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
  )
}
