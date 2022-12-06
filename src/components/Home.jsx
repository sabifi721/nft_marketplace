import React from 'react'
import Hero from './Hero'
import Loading from './Loading'
import ShowNFT from './ShowNFT'
import Transactions from './Transactions'
import UpdateNFT from './UpdateNFT'
import Artworks from './Artworks'
import CreateNFT from './CreateNFT'
import Particle from './Particle'

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
    <Artworks />
    <Transactions />
    <CreateNFT />
    <ShowNFT />
    <UpdateNFT />
    <Loading />
    <Particle />
    </div>
  )
}

export default Home;