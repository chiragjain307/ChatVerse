import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'

function Home() {
  const navigate = useNavigate()

  const handlePage = async () =>{
    await signOut(auth)
    navigate("/login")
  }
  return (
    <div>Home
      <button onClick={handlePage}>Login Page</button>
    </div>
  )
}

export default Home