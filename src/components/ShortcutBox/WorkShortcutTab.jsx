import React, { useState } from 'react'
import { useWorkContext } from '../context/ShortcutContext'
import { BsPlus, BsX } from 'react-icons/bs'
import ShortcutListItem from './ShortcutlistItem'
import AddNew from '../Common/AddNew'

const WorkShortcutTab = () => {
  const {
    state: { shortcutList },
    dispatch,
  } = useWorkContext()
  const [showNewTab, setShowNewTab] = useState(false)
  const [showEdit, setShowEdit] = useState(false)

  const addNewShortcut = (link, name) => {
    dispatch({ type: 'ADD_TO_LIST', payload: { link, name } })
    dispatch({ type: 'SAVE_LOCAL' })
  }

  return (
    <section className="flexflex-col overflow-hidden p-4 w-full h-[250px] bg-white shadow-md rounded-md col-start-2">
      <div className="relative flex justify-between items-center text-xl border-b-2 pb-4 border-purple-200">
        <h2 className="font-semibold">Project Shortcuts List</h2>
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
            title={'Add New Shortcut'}
            placeholder={'Paste the link'}
            subTitle={'Name'}
            addFunction={addNewShortcut}
          />
        )}
      </div>
      <div className="p-4 [&>*:not(:last-child)]:border-b h-[210px] overflow-scroll">
        {shortcutList.map((shortcut) => {
          return (
            <ShortcutListItem
              key={shortcut.id}
              id={shortcut.id}
              name={shortcut.name}
              edit={showEdit}
              link={shortcut.link}
            />
          )
        })}
      </div>
    </section>
  )
}

export default WorkShortcutTab
