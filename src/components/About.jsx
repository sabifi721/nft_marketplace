import React from 'react'
import ceo from '../assets/boss.png'
import usama from '../assets/usama.jpeg'
import ali from '../assets/ali.jpg'
import mubashar from '../assets/mubashar.jpg'
import Particle from './Particle'
import Footer from './Footer'


const About = () => {
  return (
<>
    <div className="container mx-auto ">
      <div className="flex flex-col py-10 text-center w-full mb-14">
        <h1 className=" text-5xl font-bold text-gray-300  tracking-wider">
          About Us
        </h1>
        <hr class=" mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-4 dark:bg-gray-700"></hr>
      </div>
      <div className="flex">
        <div className="lg:w-4/5 mx-auto ml-14 float-left ">
          <img
            alt="ecommerce"
            className="lg:w-1/2 mb-8 w-full lg:h-auto h-64 "
            src={ceo}
          />
        </div>
        <div className="lg:w-1/2 :w-1/2 grid mb-0 ">
          <h1 className="text-5xl text-center font-bold text-white ">Our Job is to <br /> Make Smart Payment <br /> Very Simple. </h1>
          <p className="leading-relaxed text-gray-400 text-center py-3 mb-2">
            Our team of finance & Technology experts have joined hands to turn
            your simple wallets into crypto wallets through SABIFI. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Neque odio corrupti quos, quis hic
            quod velit voluptatibus sequi iure fuga sapiente fugiat id autem nemo ipsam
            tenetur aperiam! Fuga, incidunt eius? Quas esse, explicabo odit, magnam unde
            asperiores saepe commodi, voluptas quasi perferendis eligendi corrupti
            perspiciatis error vero adipisci cumque.
          </p>
          <div className="flex object-center justify-center text-center">
          <button className="lg:w-4/2 text-indigo-800 bg-white font-bold  -py-1 px-6 focus:outline-none hover:bg-blue-700 rounded hover:text-white">
              <a href="https://www.sabasoftgames.com/" target='_blank'>Find More...</a>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-10 text-center w-full -mb-32 mt-24">
        <h1 className=" text-5xl font-bold text-gray-300  tracking-wider">
          Creators of Sabifi
        </h1>
        <hr class=" mx-auto w-96 h-1 bg-gray-100 rounded border-0 md:my-4 dark:bg-gray-700"></hr>
      </div>
      <div className='font-Poppins text-center text-white'>
        <div className=" flex max-w-7 xl mx-auto gap-20 ">
          <div className="bg-white/10 p-8 rounded-xl mt-40">
            <img className='rounded-full h-60 mx-auto' src={usama} alt="" />
            <h4 className="upperclass text-xl font-bold mt-6">Usama Anwar</h4>
            <p className='mt-4'>Mr. Usama Anwar is a well respected
              Blockchain developer and active investor
              in the DeFi. Mr. Usama will work closely
              with the Sabifi team on matters of
              governance, and scaling of the
              community..
            </p>
            <button className='bg-indigo-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Contact us</button>
          </div>
          <div className="bg-white/10 p-8 rounded-xl mt-40">
            <img className='rounded-full h-60 mx-auto' src={mubashar} alt="" />
            <h4 className="upperclass text-xl font-bold mt-6">Mubashar Islam</h4>
            <p className='mt-4'>Mr. Mubashar Islam is a well respected
              Blockchain developer and crypto advisor.
              Mr. Mubashar received MS in Computer
              Science from the Punjab University
              College of Information Technology
            </p>
            <button className='bg-indigo-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Contact us</button>
          </div>
          <div className="bg-white/10 p-8 rounded-xl mt-40">
            <img className='rounded-full h-60 mx-auto' src={ali} alt="" />
            <h4 className="upperclass text-xl font-bold mt-6">Muhammad Ali</h4>
            <p className='mt-4'>Mr. Muhammad Ali is a well respected
              web developer and active investor
              in the DeFi. Muhammad Ali will work closely
              with the Sabifi team on matters of
              governance, and scaling of the
              community..
            </p>
            <button className='bg-indigo-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Contact us</button>
          </div>

        </div>
      </div>
    </div>
    <Footer />
<Particle />
</>
  )
}

export default About


