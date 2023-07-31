import { useEffect, useState } from 'react'
import { AiOutlineCheckCircle, AiFillCheckCircle } from 'react-icons/ai'
import { BsX } from 'react-icons/bs'
import { useToDoList } from '../context/ToDoContext'

const ToDoListItem = ({ id, task, edit, checked }) => {
  const [check, setChecked] = useState(checked)
  const { dispatch } = useToDoList()

  useEffect(() => {
    check
      ? dispatch({ type: 'CHECKED', payload: id })
      : dispatch({ type: 'UNCHECKED', payload: id })
    dispatch({ type: 'SAVE_LOCAL' })
  }, [check])

  const deleteTask = () => {
    dispatch({ type: 'DELETE_TASK', payload: id })
    dispatch({ type: 'SAVE_LOCAL' })
  }

  return (
    <div className="flex items-center justify-between py-2">
      {/* Check Icon and Text */}
      <div className="flex gap-2 items-center">
        {check ? (
          <AiFillCheckCircle
            className="cursor-pointer text-purple-300"
            onClick={() => setChecked(false)}
          />
        ) : (
          <AiOutlineCheckCircle
            className="cursor-pointer text-purple-500"
            onClick={() => setChecked(true)}
          />
        )}
        <p
          className={`relative bottom-[2px] ${
            check && 'line-through text-slate-400'
          }`}
        >
          {task}
        </p>
      </div>

      {/* Delete Icon */}
      {(edit || check) && (
        <BsX
          className="text-red-400 hover:text-red-500 cursor-pointer"
          onClick={deleteTask}
        />
      )}
    </div>
  )
}

export default ToDoListItem
