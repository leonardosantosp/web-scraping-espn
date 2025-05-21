// Hooks, Components
import { Link } from 'react-router-dom'
import { FullScreenMenu } from './FullScreenMenu'

// Assets
import NBALogo from '../assets/NBALogo.png'

export const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <img
            src={NBALogo}
            alt="logo nba"
            className="header__logo-image"
            loading="lazy"
          />
        </Link>
        <h2 className="header__logo-name" data-text="NBA API">
          NBA <span>API</span>
        </h2>
      </div>

      <div className="header__routes">
        <ul>
          <li>
            <Link to="/teams">Teams</Link>
          </li>
          <li>
            <Link to="/players">Players</Link>
          </li>
        </ul>
      </div>

      <FullScreenMenu />
    </div>
  )
}
