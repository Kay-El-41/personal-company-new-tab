import React, { useState } from 'react'
import { BsPlus, BsX } from 'react-icons/bs'
import ToDoListItem from './ToDoListItem'
import { useToDoList } from '../context/ToDoContext'
import AddNew from '../Common/AddNew'

const TodoTab = () => {
  const [showNewTab, setShowNewTab] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const {
    state: { toDoList },
    dispatch,
  } = useToDoList()

  const addToDoList = (taskInput) => {
    dispatch({
      type: 'ADD_TO_LIST',
      payload: taskInput,
    })
    dispatch({ type: 'SAVE_LOCAL' })
  }

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
        {showNewTab && (
          <AddNew
            showTab={setShowNewTab}
            addFunction={addToDoList}
            title={'Add New Todo'}
          />
        )}
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
