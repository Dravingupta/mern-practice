import { useState } from 'react'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'


function App() {

  return (
    <>
     <h1>Task app</h1>
     <TaskList />
     <AddTask />
     </>
     
  )
}

export default App
