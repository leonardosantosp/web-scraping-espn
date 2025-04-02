import { getTeams } from '../../api/teamsApi.js'
import { useEffect, useState, useRef } from 'react'
import nbaMap from '../assets/nbaMap.svg'
import { Load } from '../components/load.jsx'

export const NbaMap = () => {
  const [teamLinks, setTeamLinks] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const svgRef = useRef(null)

  useEffect(() => {
    const fetchTeamLinks = async () => {
      const teams = await getTeams()

      const links = teams.reduce((acc, team) => {
        const sanitizedId = team.time.replace(/\s+/g, '-').toLowerCase()
        acc[sanitizedId] = `/teams/${team._id}`
        return acc
      }, {})

      setTeamLinks(links)
    }

    fetchTeamLinks()
  }, [])

  const handleSvgLoad = () => {
    if (!svgRef.current) return

    const svgDoc = svgRef.current.contentDocument
    if (!svgDoc) return

    const logos = svgDoc.querySelectorAll('.team')

    const handleClick = event => {
      const teamId = event.target.id
      const url = teamLinks[teamId]

      if (url) {
        window.location.href = url
      }
    }

    for (const logo of logos) {
      logo.style.transition = 'transform 0.5s'
      logo.addEventListener('click', handleClick)

      logo.addEventListener('mouseenter', () => {
        logo.style.transform = 'translateY(-10px)'
      })
      logo.addEventListener('mouseleave', () => {
        logo.style.transform = 'translateY(0px)'
      })
    }
    return () => {
      for (const logo of logos) {
        logo.removeEventListener('click', handleClick)
      }
    }
  }

  return (
    <>
      <div className="main">
        {isLoading && <Load />}
        <object
          className="load-object"
          ref={svgRef}
          id="mapa"
          type="image/svg+xml"
          data={nbaMap}
          onLoad={() => {
            setTimeout(() => {
              if (svgRef.current) {
                svgRef.current.style.visibility = 'visible'
                handleSvgLoad()
                setIsLoading(false)
              }
            }, 100)
          }}
          title="Mapa interativo dos times da NBA"
          aria-label="Mapa interativo dos times da NBA"
        />
      </div>
    </>
  )
}
