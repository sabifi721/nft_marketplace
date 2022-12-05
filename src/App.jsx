import { useEffect } from 'react'
import { getAllNFTs, isWallectConnected } from './Blockchain.Services'
import Header from './components/Header'
import Home from './components/Home'
import { Switch, Route } from "react-router-dom";
import About from './components/About'
import Particle from './components/Particle';
import Footer from './components/Footer';
const App = () => {
  useEffect(async () => {
    await isWallectConnected()
    await getAllNFTs()
  }, [])

  return (

    <>
      <div className="bg-gradient-to-b from-neutral-900 bg-indigo-700">
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          {/* <Route component={Error}/> */}
        </Switch>
      </div>
    </>
  )
}

export default App
