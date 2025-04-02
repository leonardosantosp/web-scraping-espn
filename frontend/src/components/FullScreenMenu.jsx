import { useState } from 'react'
import { Link } from 'react-router-dom'
export const FullScreenMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="menu">
      <button
        type="button"
        className="menu-button"
        onClick={() => setMenuOpen(true)}
      >
        ☰
      </button>

      <div className={`fullscreen-menu ${menuOpen ? 'open' : ''}`}>
        <button
          type="button"
          className="close-button"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        <nav className="menu-links">
          <Link to="/teams" onClick={() => setMenuOpen(false)}>
            Teams
          </Link>
          <Link to="/players" onClick={() => setMenuOpen(false)}>
            Players
          </Link>
        </nav>
      </div>
    </div>
  )
}
