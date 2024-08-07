import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Chat from './pages/Chat'
import PageNotFound from './pages/PageNotFound'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/chat/:uniqueId' element={<Chat />}></Route>
      <Route path='*' element={<PageNotFound />}></Route>
    </Routes>
  )
}


export default App
