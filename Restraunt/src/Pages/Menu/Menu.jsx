import React from 'react'
import Carousal from '../../Components/Carousal/Carousal'
import Layout from '../../Components/Layout/Layout'
import { menu } from '../../constants/index'
import Location from '../../Components/Location/Location'
import SearchBar from './SearchBar'
import MenuSection from './MenuSection'

const Menu = () => {
  return (
    <>
    <Layout>
      {/* <div className='absolute'> */}
      <div className='bg-yellow-950'> 
      <div className='w-full h-10 bg-transparent m-3'></div>
    <Carousal></Carousal>
    <div className='bg-white'>
      
    <SearchBar></SearchBar>
    <div className='flex'>
    <MenuSection></MenuSection>
    </div>
    </div>
    </div>
    <Location></Location>
    </Layout>
    </>
  )
}

export default Menu