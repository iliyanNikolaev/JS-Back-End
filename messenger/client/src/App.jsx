import { Route, Routes } from 'react-router-dom'

import './App.css'

import Login from './components/login/Login'
import Messenger from './components/messenger/Messenger'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Login /> }></Route>
        <Route path='/messenger' element={ <Messenger /> }></Route>
      </Routes>
    </>
  )
}

export default App
