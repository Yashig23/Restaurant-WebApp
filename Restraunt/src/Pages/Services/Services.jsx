import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { gifs } from '../../assets/gif'

const Services = () => {
  return (
    <>
    <Navbar></Navbar>
     {/* Services We Provide */}
     <section className='m-0'>
          <div className='bg-teal-600 p-5 text-white text-[50px] font-thin'>
           <div className='flex justify-center text-center'> Services </div>
          </div>
          <div className='bg-white w-full flex flex-wrap gap-10 justify-center p-5'>
           {gifs.map((e)=>(
             <div id={e.id} className=' m-3 p-4'>

             <div className='flex justify-center items-center'>
            <img src={e.img} className='h-40 w-25'></img>
            </div>
            <div className='text-black text-[20px] font-medium m-2 flex justify-center items-center'> {e.title}</div>
            
          </div>
           ))}
          </div>
        </section>

    <Footer></Footer>
    </>
  )
}

export default Services