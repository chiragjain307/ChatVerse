import React from 'react'
import favicon from '../assets/favicon.png'

function Login() {
  return (
    <div className='relative'>
      <div className='h-52 w-full bg-[#1c3669] p-3 flex items-center gap-3'>
        <img src={favicon} alt='img'  className='h-8 bg-white rounded-xl'/>
        <span>ChatVerse</span>
      </div>
      <div style={{ height: 'calc(100vh - 13rem)' }} className=' bg-gray-300 w-full'>

      </div>

      <div className='absolute h-3/4 w-3/4 bg-white'>
        <img src='' alt='' />
        <p>Sign In</p>
      </div>
    </div>
  )
}

export default Login