import timelessLogo from "../assets/sabifi.png";
import { NavLink } from "react-router-dom";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.35] justify-center items-center">
        <img src={timelessLogo} alt="logo" className="w-32" />
      </div>

      <div className="flex flex-1 justify-evenly items-center  sm:mt-0 mt-5 w-full">
      <ul
        className="md:flex-[0.5] text-white md:flex
        hidden"
      >
        <NavLink exact activeClassName='active_class' to='/'className="mx-4 cursor-pointer  font-bold
          ">Marketplace</NavLink>
        <NavLink exact activeClassName='active_class' to='/token'className="mx-4 cursor-pointer font-bold
          ">SABIFI Token</NavLink>
        <NavLink exact activeClassName='active_class' to='/about'className="mx-4 cursor-pointer  font-bold
          ">About Us</NavLink>
        <li className="mx-4 cursor-pointer font-bold
          ">Whitepaper <a href="../assets/whitepaper.pdf"/> </li>
      </ul>
      </div>
    </div>
    <div className="flex flex-[0.25] py-8 justify-center items-center">
      <p className="text-white text-right text-xs">
        &copy;2022 All rights reserved
      </p>
    </div>
  </div>
);

export default Footer;
