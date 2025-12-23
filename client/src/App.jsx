import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom"
import Tasks from './pages/Tasks'
import AddTaskPage from './pages/AddTaskPage'
import Signup from './pages/Signup'
import Login from './pages/Login'


function App() {

  return (
    <>
      <h1>Task app</h1>
      <nav>
        <Link to='/tasks'>Tasks</Link> |{" "}
        <Link to="/login" >Login </Link> |{" "}
        <Link to="/signup" >Sign up</Link>|{" "}
      </nav>

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/tasks' element={<Tasks />} />
      </Routes>
    </>
  )
}

export default App
