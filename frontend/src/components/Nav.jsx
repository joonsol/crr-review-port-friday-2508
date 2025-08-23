import React from 'react'
import { ThemeProvider, useTheme } from '../contexts/ThemeContext'
import useSmoothScroll from '../hook/useSmoothScroll'
const Nav = () => {
  const navLink = ['Hero', 'Contact', 'Work', 'Aboutme']
  const { theme, toggleTheme } = useTheme();

  const scrollTo = useSmoothScroll()
  return (
    <ul>
      {navLink.map((nav, i) => (

        <li key={i}>
          <a
            href={`#${nav}`}
            onClick={(e) => {
              e.preventDefault()
              scrollTo(nav)
            }} >
            {nav}
          </a>
        </li>
      ))}

    </ul>
  )
}

export default Nav