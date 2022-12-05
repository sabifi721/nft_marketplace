import timelessLogo from '../assets/sabifi.png'

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 ">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4 mt-32">
      <div className="flex flex-[0.25] justify-center items-center">
        <img src={timelessLogo} alt="logo" className="w-32" />
      </div>

      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer  font-bold">
          SBF Token
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer font-bold">
          About Us
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer font-bold">
          Features
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer font-bold">
          Community
        </p>
      </div>

      
    </div>
    <div className="flex flex-[0.25] justify-center items-center">
        <p className="text-white text-right text-xs">
          &copy;2022 All rights reserved
        </p>
      </div>
  </div>
)

export default Footer
