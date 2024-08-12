import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Chat from './pages/Chat'
import PageNotFound from './pages/PageNotFound'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function ProtectedRoute({ Home, Login }) {
    if (isLoggedIn) {
      return Home
    }
    else {
      return Login
    }
  }

  return (
    <Routes>
      <Route path='/' element={<ProtectedRoute Home={<Home setIsLoggedIn={setIsLoggedIn} />} Login={<Login setIsLoggedIn={setIsLoggedIn} />} />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/chat/:uniqueId' element={<Chat />}></Route>
      <Route path='*' element={<PageNotFound />}></Route>
    </Routes>
  )
}

export default App

