import React from 'react'
import Loading from './Loading'
import ShowNFT from './ShowNFT'
import Transactions from './Transactions'
import UpdateNFT from './UpdateNFT'
import Alert from './Alert'
import Artworks from './Artworks'
import CreateNFT from './CreateNFT'
import Particle from './Particle'
import Footer from './Footer'
import Hero from './Hero'
const Home = () => {
  return (
    <>
    <div className="min-h-screen">
    <div className="">
    
    <Hero />
    <Artworks />
    <Transactions />
    <CreateNFT />
    <ShowNFT />
    <UpdateNFT />
    <Footer />
    <Alert />
    <Loading />
    <Particle />

    </div>
  </div>
  </>
  )
}

export default Home