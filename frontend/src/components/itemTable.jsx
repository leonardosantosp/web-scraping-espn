import { Link } from 'react-router-dom'

export const ItemTable = ({
  id,
  image,
  name,
  number,
  position,
  age,
  height,
  weight,
  university,
  salary
}) => {
  return (
    <tr key={id}>
      <td>
        <img
          className="team__player-image"
          src={image}
          alt={`Imagem do jogador ${name}`}
        />
      </td>
      <td className="team__player-name">
        <Link to={`/players/${id}`}>
          {name} <span>{number}</span>
        </Link>
      </td>
      <td>{position}</td>
      <td>{age}</td>
      <td>{height}</td>
      <td>{weight}</td>
      <td>{university}</td>
      <td>{salary}</td>
    </tr>
  )
}
