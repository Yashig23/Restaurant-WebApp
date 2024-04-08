import React from 'react'
import {navLinks} from '../../constants/index.js'
import { useState } from 'react';
import close1 from '../../assets/SVGS/close.svg'
import menu from '../../assets/SVGS/menu.svg'
import logo from '../../assets/SVGS/logo.png'

const Navbar = () => {
 const [active, setActive] = useState('');
 const [toggle, setToggle] = useState(false);

  return<>
  <div>
  <div className='flex w-full fixed  bg-transparent  py-1  justify-between'>

    <div className=" flex w-full max-w-7xl bg-transparent pb-3 pt-3 px-5 rounded-full mx-auto ">
         <div className=' flex mr-auto '>
    <img src={logo} alt="Logo" className="max-w-20 max-h-20 absolute" />
  </div> 
        <ul className='sm:flex hidden list-none flex-column gap-10 '>
  {navLinks.slice(0, 3).map((link) => (
    <li
      key={link.id}
      className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] text-yellow-500 font-medium cursor-pointer`}
      onClick={() => setActive(link.title)}
    >
      <a href={`#${link.id}`} className=" font-thin">{link.title}</a>
    </li>
  ))}
  
  {navLinks.slice(3, 7).map((link) => (
    <li
      key={link.id}
      className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] text-yellow-500 font-medium cursor-pointer`}
      onClick={() => setActive(link.title)}
    >
      <a href={`#${link.id}`} className=" font-thin">{link.title}</a>
    </li>
  ))}
</ul>


<div className='flex ml-auto '>
<button className='px-7  rounded-2xl text-[18px] font-medium py-1 text-white bg-yellow-500 hover:bg-yellow-600'> Login </button>
</div>

    </div> 
    </div> 

    <div className='flex justify-end items-center flex-1 m-2 cursor-pointer ' onClick={()=> setToggle(!toggle)}>
      <img src={toggle ? close1 : menu} alt='menu/close svg' className='w-[30px] h-[30px] object-contain cursor-pointer sm:hidden '  onClick={()=> setToggle(!toggle)}/>
       <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-0 xl:hidden right-0 mx-4 my-2 min-w-[140px] rounded-xl`}>
        <ul className='list-none flex justify-end items-center flex-col gap-4'>
        {navLinks.map((link)=>(
            <li key={link.id}
            className={`${active === link.title ? "text-white" : 'text-secondary'} hover:text-white text-[18px] border-white border-b-2 font-medium cursor-pointer`}
            onClick={()=> {
            setToggle(!toggle);
            setActive(link.title)}}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
       </div>

    </div>
    </div>
    
  </>
}

export default Navbar