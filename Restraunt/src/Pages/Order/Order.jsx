import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import orderSum from "./orderSum";
import orderList from './orderList';

const Order = () => {
  return (
    <>
    <Navbar></Navbar>
    <section className='mt-0 '>
      <div className="p-5 mt-20 ml-2 mb-2 mr-2 bg-white text-slate-800 flex justify-center items-center text-[22px] font-medium"> Order </div>
    </section>
    <section>
      <orderList></orderList>
    </section>
    <scetion>
      <orderSum></orderSum>
    </scetion>
    </>
  )
}

export default Order