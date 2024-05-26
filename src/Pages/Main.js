import React from 'react'
import Explore from '../components/Explore'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Stream from '../components/Stream'
import Hero from '../components/Hero'

const Main = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Explore />
      <Stream />
      <Footer />
    </div>
  )
}

export default Main
