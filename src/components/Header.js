import React from 'react'
import { GrLanguage } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { countries } from 'country-flag-icons'

const Header = () => {
  return (
    <header className='px-10 py-2 flex text-white bg-black items-center gap-6'>
      <div >
        <img
          src="../assets/Logo.png"
          className=""
          alt="Alibaba logo"
        />
        
      </div>
      <div className='ml-auto'>
        <p>Deliver to:</p>
        <p>
          <img src="../assets/Flag_of_Italy.png" alt='Flag of Italy '></img> IT</p>
      </div>

      <div className='flex items-center gap-2'>
      <GrLanguage />
        English-EUR
      </div>

      <div  className='flex items-center gap-2'>
      <CgProfile />
        Sign in 
      </div>

      <button className='px-8 py-1 text-white bg-orange-500 rounded-full'>
        Sign up
      </button>
    </header>
  )
}

export default Header
