import React from 'react'
import { BsX } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useWorkContext } from '../context/ShortcutContext'

const ShortcutListItem = ({ name, link, edit, id }) => {
  const { dispatch } = useWorkContext()

  const deleteShortcut = () => {
    dispatch({ type: 'DELETE_FROM_LIST', payload: id })
    dispatch({ type: 'SAVE_LOCAL' })
  }

  return (
    <div className="flex items-center justify-between py-2">
      <Link to={link} target="_blank">
        <p className="relative bottom-[2px]">{name}</p>
      </Link>
      {edit && (
        <BsX
          className="text-red-400 hover:text-red-500 cursor-pointer"
          onClick={deleteShortcut}
        />
      )}
    </div>
  )
}

export default ShortcutListItem
