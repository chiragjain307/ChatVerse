import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'

function Home({setIsLoggedIn}) {
  const navigate = useNavigate()

  const handlePage = async () =>{
    await signOut(auth)
    setIsLoggedIn(false)
    // navigate("/login")
  }
  
  return (
    <div>Home
      <button onClick={handlePage}>Logout</button>
    </div>
  )
}

export default Home