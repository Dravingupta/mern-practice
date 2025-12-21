import { useState } from 'react'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'
import UserSignup from './components/UserSignup'


function App() {

  return (
    <>
     <h1>Task app</h1>
     <TaskList />
     <AddTask />
     <UserSignup />
    </> 
  )
}

export default App
