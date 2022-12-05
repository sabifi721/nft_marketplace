import timelessLogo from '../assets/sabifi.png'
import { connectWallet } from '../Blockchain.Services'
import { useGlobalState, truncate } from '../store'
import { NavLink } from 'react-router-dom'
import Download from './Download'

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  return (
    <nav className="w-4/5 flex md:justify-center justify-between items-center py-4 mx-auto">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img
          className="h-40 cursor-pointer"
          src={timelessLogo}
          alt="Timeless Logo"
        />
      </div>

      <ul
        className="md:flex-[0.5] text-white md:flex
        hidden list-none flex-row justify-between 
        items-center flex-initial"
      >
        <NavLink activeClassName='active_class' to='/'className="mx-4 cursor-pointer  font-bold
          ">Marketplace</NavLink>
        <NavLink activeClassName='active_class' to=''className="mx-4 cursor-pointer font-bold
          ">SABIFI Token</NavLink>
        <NavLink activeClassName='active_class' to='/about'className="mx-4 cursor-pointer  font-bold
          ">About Us</NavLink>
          <div className="mx-4 cursor-pointer font-bold">
            <Download />
          </div>
      </ul>

      {connectedAccount ? (
        <button
          className="shadow-xl shadow-black text-white
        bg-[#e32970] hover:bg-[#bd255f] md:text-l p-2
          rounded-full cursor-pointer font-semibold"
        > 
          {truncate(connectedAccount, 4, 4, 11)}
        </button>
      ) : (
        <button
          className="shadow-xl shadow-black text-white
        bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
          rounded-full cursor-pointer"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </nav>
  )
}

export default Header
