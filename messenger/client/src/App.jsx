import { Route, Routes } from 'react-router-dom'

import './App.css'

import Login from './components/login/Login'
import Chat from './components/chat/Chat'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Login /> }></Route>
        <Route path='/chat' element={ <Chat /> }></Route>
      </Routes>
    </>
  )
}

export default App
