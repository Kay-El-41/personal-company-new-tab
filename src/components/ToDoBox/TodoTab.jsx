import React, { useState } from 'react'
import { BsPlus, BsX } from 'react-icons/bs'
import TodoNew from './TodoNew'
import ToDoListItem from './ToDoListItem'
import { useToDoList } from '../context/ToDoContext'

const TodoTab = () => {
  const [showNewTab, setShowNewTab] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const {
    state: { toDoList },
  } = useToDoList()

  return (
    // Main Box
    <section className="p-4 w-full max-h-full bg-white rounded-lg shadow-md row-span-2">
      {/* Main Headers */}
      <div className="relative flex justify-between items-center text-xl border-b-2 pb-4 border-purple-200">
        <h2 className="font-semibold">To Do List</h2>
        <div className="flex items-center">
          <BsPlus
            className={`hover:text-purple-500 cursor-pointer ${
              showNewTab && 'text-purple-500'
            }`}
            onClick={() => setShowNewTab(true)}
          />
          <BsX
            className="hover:text-purple-500 cursor-pointer"
            onClick={() =>
              showNewTab ? setShowNewTab(false) : setShowEdit((prev) => !prev)
            }
          />
        </div>
        {showNewTab && <TodoNew showTab={setShowNewTab} />}
      </div>
      {/* Task List */}
      <div className="p-4 [&>*:not(:last-child)]:border-b">
        {toDoList.map((todo) => {
          return (
            <ToDoListItem
              task={todo.task}
              checked={todo.checked}
              id={todo.id}
              key={todo.id}
              edit={showEdit}
            />
          )
        })}
      </div>
    </section>
  )
}

export default TodoTab
