import React from 'react'
import Aboutme from '../components/Aboutme'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Work from '../components/Work'
import useTheme from "../hook/useTheme";
const Home = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <h1>현재 모드: {theme}</h1>
      <button onClick={toggleTheme}>테마 전환</button>
      <Header />
      <section id='Hero'>
        <Hero />
      </section>
      <section id='Work'>
        <Work />
      </section>
      <section id='Aboutme'>
        <Aboutme />
      </section>
      <section id='Contact'>
        <Contact />
      </section>
      <Footer />
    </div>
  )
}

export default Home