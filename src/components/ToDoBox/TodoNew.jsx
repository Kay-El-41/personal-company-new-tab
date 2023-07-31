import React, { useRef, useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import { useToDoList } from '../context/ToDoContext'

const TodoNew = ({ showTab }) => {
  const { dispatch } = useToDoList()
  const [taskInput, setTaskInput] = useState('')

  const addToDoList = (e) => {
    e.preventDefault()
    if (taskInput.length > 0) {
      dispatch({
        type: 'ADD_TO_LIST',
        payload: taskInput,
      })
    }
    setTaskInput('')
    dispatch({ type: 'SAVE_LOCAL' })
  }

  return (
    // Absolute Placement Box
    <div className="absolute top-8 right-0">
      {/* Cover Box  */}
      <OutsideClickHandler
        onOutsideClick={() => {
          showTab(false)
        }}
      >
        {/* Main Box */}
        <div className="px-4 py-3 bg-white rounded-lg shadow-md ">
          <form
            className="flex flex-col text-sm gap-1"
            autoComplete="off"
            onSubmit={addToDoList}
          >
            <label htmlFor="newTodo" className="text-right text-purple-400">
              Add New Todo
            </label>
            <input
              type="text"
              className="outline-purple-500 border rounded-md border-purple-400 p-2"
              value={taskInput}
              autoComplete="off"
              id="newTodo"
              onChange={(e) => setTaskInput(e.target.value)}
              placeholder=" Press Enter to Save"
              autoFocus
            />
          </form>
        </div>
      </OutsideClickHandler>
    </div>
  )
}

export default TodoNew
