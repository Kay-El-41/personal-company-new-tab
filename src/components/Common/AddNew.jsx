import React, { useRef, useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import { useToDoList } from '../context/ToDoContext'

const AddNew = ({
  showTab,
  addFunction,
  title,
  subTitle,
  placeholder = 'Press enter to save',
}) => {
  const [mainInput, setMainInput] = useState('')
  const [nameInput, setNameInput] = useState('')

  const addNewItem = (e) => {
    e.preventDefault()
    if (mainInput.length > 0) {
      addFunction(mainInput, nameInput)
    }
    setMainInput('')
    showTab(false)
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
            onSubmit={addNewItem}
          >
            {subTitle && (
              <>
                <label htmlFor="newTodo" className="text-right text-purple-400">
                  {subTitle}
                </label>
                <input
                  type="text"
                  className="outline-purple-500 border rounded-md border-purple-400 p-2"
                  value={nameInput}
                  autoComplete="off"
                  id="newTodo"
                  onChange={(e) => setNameInput(e.target.value)}
                  placeholder="Enter the name"
                  autoFocus
                />
              </>
            )}
            <label htmlFor="newTodo" className="text-right text-purple-400">
              {title}
            </label>
            <input
              type="text"
              className="outline-purple-500 border rounded-md border-purple-400 p-2"
              value={mainInput}
              autoComplete="off"
              id="newList"
              onChange={(e) => setMainInput(e.target.value)}
              placeholder={placeholder}
              autoFocus
            />

            {subTitle && (
              <button
                className="px-2 bg-purple-500 rounded-md py-2 text-white mt-2"
                type="submit"
              >
                Add
              </button>
            )}
          </form>
        </div>
      </OutsideClickHandler>
    </div>
  )
}

export default AddNew
