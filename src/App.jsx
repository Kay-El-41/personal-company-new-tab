import React from 'react'
import Navbar from './components/Navbar'
import TodoTab from './components/ToDoBox/TodoTab'
import { ToDoContextProvider } from './components/context/ToDoContext'
import ShortcutTab from './components/ShortcutBox/ShortcutTab'
import CheckInTab from './components/CheckinBox/CheckInTab'
import WorkShortcutTab from './components/ShortcutBox/WorkShortcutTab'
import { WorkContextProvider } from './components/context/ShortcutContext'
import InfoBox from './components/InfoBox/InfoBox'

function App() {
  return (
    <>
      <Navbar />
      <main className="grid px-10 py-10 gap-x-10 gap-y-10">
        <ToDoContextProvider>
          <TodoTab />
        </ToDoContextProvider>
        <WorkContextProvider>
          <WorkShortcutTab />
        </WorkContextProvider>
        <ShortcutTab />
        <CheckInTab />
        {/* <InfoBox /> */}
      </main>
    </>
  )
}

export default App
