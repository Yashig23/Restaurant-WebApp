import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
  return <>
    <Navbar/>
    <div className='flex justify-center items-center '>{children}</div>
    <Footer/>
    </>
}

export default Layout