import React from 'react'
import Nav from './Nav'
import "./styles/Header.scss"
import { ThemeProvider, useTheme } from '../contexts/ThemeContext'

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className='Header'>
      <div className="inner">

        <h4>LOGO</h4>
        <div className="right-wrap">

          <button onClick={toggleTheme}>{theme}</button>
          <Nav />
        </div>
      </div>
    </header>
  )
}

export default Header