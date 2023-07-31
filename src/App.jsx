import React from 'react'
import Navbar from './components/Navbar'
import TodoTab from './components/ToDoBox/TodoTab'
import { ToDoContextProvider } from './components/context/ToDoContext'
import ShortcutTab from './components/ShortcutBox/ShortcutTab'
import CheckInTab from './components/CheckinBox/CheckInTab'

function App() {
  return (
    <>
      <Navbar />
      <main className="grid px-10 py-10 gap-x-10 gap-y-10">
        <ToDoContextProvider>
          <TodoTab />
        </ToDoContextProvider>
        <ShortcutTab />
        {/* <div className=""></div>
        <div className="w-[250px] h-20 bg-pink-500 rounded-sm col-start-2 col-span-2"></div> */}
        <CheckInTab/>
      </main>
    </>
  )
}

export default App
