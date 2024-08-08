import React from 'react'
import favicon from '../assets/favicon.png'
import fingerPrint from '../assets/fingerprint.png'
import { BiLogIn } from "react-icons/bi";


function Login() {
  return (
    <div className='relative'>
      <div className='h-[220px] w-full bg-[#1c3669] p-3  text-white'>
        <div className='flex items-center gap-4 ml-48 mt-20 uppercase font-bold'>
          <img src={favicon} alt='img' className='h-8 bg-white rounded-xl' />
          <span>ChatVerse</span>
        </div>
      </div>

      <div className=' relative bg-[#eff2f5] h-[calc(100vh-220px)] w-full flex justify-center'>
        <div className='absolute h-[80%] w-3/4 bg-white top-[-70px] shadow-2xl  rounded-lg flex flex-col justify-center items-center gap-1'>

          <img src={fingerPrint} alt='' className='h-20' />
          <p className='mt-4 font-bold text-xl'>Sign In</p>
          <p className='text-gray-400'>Sign in with your google account to get started.</p>
          <button className='bg-[#1c3669] text-white p-2 rounded-lg flex items-center gap-1 mt-4'>Sign in with Google<BiLogIn /></button>


        </div>
      </div>

    </div>
  )
}

export default Login