import React, { useState } from 'react'
import CheckInOutForm from './CheckInOutForm'
import CheckInOutText from './CheckInOutText'

const CheckInTab = () => {
  const [tasks, setTasks] = useState({
    yesterday: [],
    today: [],
  })
  const [showForm, setShowForm] = useState(true)

  const generateHandler = () => {
    if (tasks.yesterday.length > 0 && tasks.today.length > 0) setShowForm(false)
  }

  const resetHandler = () => {
    setTasks({ yesterday: [], today: [] })
  }

  return (
    <section className=" flex flex-col p-4 w-full h-[fit] bg-white shadow-md rounded-md col-start-2">
      <div className="relative flex justify-between items-center text-xl border-b-2 pb-4 border-purple-200">
        <h2 className="font-semibold">Check-In Generator</h2>
      </div>
      {showForm ? (
        <div className="flex flex-col justify-center h-full gap-3">
          <CheckInOutForm tasks={tasks} setTasks={setTasks} />
          <div className="space-x-2 mt-2">
            <button
              className="bg-red-500 rounded-md shadow-sm p-2 text-white w-[100px] self hover:bg-red-600 active:scale-95"
              onClick={resetHandler}
            >
              Reset
            </button>
            <button
              className="bg-purple-500 rounded-md shadow-sm p-2 text-white w-[100px] self hover:bg-purple-600 active:scale-95"
              onClick={generateHandler}
            >
              Generate
            </button>
          </div>
        </div>
      ) : (
        <div>
          <CheckInOutText data={tasks} goBack={() => setShowForm(true)} />
        </div>
      )}
    </section>
  )
}

export default CheckInTab

// * Well, this is for next week modification, the generate text tab, it is all done, you could do improvement, but it's better not to touch functions
