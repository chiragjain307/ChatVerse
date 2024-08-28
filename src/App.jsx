import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Chat from './pages/Chat'
import PageNotFound from './pages/PageNotFound'
import ProtectedRoute from './pages/ProtectedRoute'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  return (
    <Routes>
      
      <Route path='/' element={<ProtectedRoute isLoggedIn={isLoggedIn}>
        <Home setIsLoggedIn={setIsLoggedIn} />
      </ProtectedRoute>}></Route>
      
      <Route path='/chat/:uniqueId' element={<ProtectedRoute isLoggedIn={isLoggedIn}>
        <Chat />
      </ProtectedRoute>}></Route>
      
      <Route path='/login' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}></Route>
      
      <Route path='*' element={<PageNotFound />}></Route>
    </Routes>
  )
}

export default App

