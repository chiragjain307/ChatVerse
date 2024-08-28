import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'

function Home({ setIsLoggedIn }) {
  const navigate = useNavigate()

  const handlePage = async () => {
    await signOut(auth)
    setIsLoggedIn(false)
    // navigate("/login")
  }

  return (
    <div className=' relative'>
      <div className='h-[220px] w-full bg-[#1c3669] p-3  text-white'>
      </div>
      <div className='  bg-[#eff2f5] h-[calc(100vh-220px)] w-full flex justify-center'>
      </div>

      <div className=' absolute border-2 h-[100vh] w-3/4 bg-white  shadow-2xl  rounded-lg flex flex-col justify-center items-center gap-1'>

        <p className='mt-4 font-bold text-xl'>Sign In</p>
        <p className='text-gray-400'>Sign in with your google account to get started.</p>
        <button className='bg-[#1c3669] text-white p-2 rounded-lg flex items-center gap-1 mt-4' onClick={handlePage}>Logout</button>


      </div>

      {/* <div>Home
        <button onClick={handlePage}>Logout</button>
      </div> */}
    </div>
  )
}

export default Home