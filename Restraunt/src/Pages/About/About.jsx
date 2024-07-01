import React from 'react'
import Layout from '../../Components/Layout/Layout'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import AboutCarousal from '../../Components/Carousal/AboutCarousal';
import writing from '../../assets/Gifs/writing.png'

const About = () => {
  return (
    <>
      <Navbar></Navbar>
      {/* <div className='font-bold text-[100px] text-white mt-19'>About</div> */}
      {/*Photos of restraunt */}
      {/*Histpry of restraunt */}
      {/* about restraunt */}
      {/* services about restraunt*/}
      <AboutCarousal></AboutCarousal>
      <section>
        <div className="text-[20px] font-medium flex justify-center bg-black text-white p-5">
          History
        </div>
        <div className='text-black font-light bg-white p-5 flex justify-evenly'>
          <img src={writing}></img>
          <p>The story starts in 2007, when we opened a new ice-parlour. Our family has always run by
            food chains.
          </p>
        </div>
        <div className='text-[20px] font-medium flex justify-center bg-black text-white p-5'>
          Present
        </div>
        <div className='text-black font-light bg-white p-5 flex justify-evenly'>
          <img src={writing}></img>
          <p>The story starts in 2007, when we opened a new ice-parlour. Our family has always run by
            food chains.
          </p>
        </div>
        <div className='text-white font-light bg-black p-5'>
          <div className='flex justify-center m-3'>
          Explore the Services we provide
          </div>
          <div className='flex justify-center'>
          <button onClick={()=>window.location.href ='/services'} className='border rounded-2xl text-white font-thin p-4 hover:bg-white hover:text-black hover:font-semibold  hover:duration-300 hover:scale-110 '>Services</button>
          </div>
        </div>
      </section> 
      <Footer></Footer>
    </>
  )
}

export default About