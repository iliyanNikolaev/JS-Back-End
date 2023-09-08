import { Link, Route, Routes } from 'react-router-dom'

import './App.css'

import Login from './components/login/Login'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Login /> }></Route>
      </Routes>
    </>
  )
}

export default App
