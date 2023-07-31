import React, { useState } from 'react'

const CheckInOutForm = ({ tasks, setTasks }) => {
  const [yTask, setYInput] = useState('')
  const [tTask, setTInput] = useState('')

  const onTypingTask = (e) => {
    e.target.name == 'yesterday'
      ? setYInput(e.target.value)
      : setTInput(e.target.value)
  }

  const yesterdayFormHandler = (e) => {
    e.preventDefault()
    setTasks({ ...tasks, yesterday: [...tasks.yesterday, yTask] })
    setYInput('')
  }
  const todayFormHandler = (e) => {
    e.preventDefault()
    setTasks({ ...tasks, today: [...tasks.today, tTask] })
    setTInput('')
  }

  return (
    <>
      <form onSubmit={yesterdayFormHandler}>
        <div className="flex flex-col gap-2">
          <label htmlFor="yesterdayJob" className="flex justify-between">
            What did you do yesterday?&nbsp;
            <span className="text-purple-400">
              Total: {tasks.yesterday.length}
            </span>
          </label>
          <input
            type="text"
            className="p-2 outline-purple-400 rounded-sm bg-slate-50 placeholder:text-sm"
            id="yesterdayJob"
            name="yesterday"
            placeholder="Press enter to save"
            value={yTask}
            onChange={onTypingTask}
          />
        </div>
      </form>
      <form onSubmit={todayFormHandler}>
        <div className="flex flex-col gap-2">
          <label htmlFor="todayJob" className="flex justify-between">
            What will you do today?&nbsp;
            <span className="text-purple-400">Total: {tasks.today.length}</span>
          </label>
          <input
            type="text"
            className="p-2 outline-purple-400 rounded-sm bg-slate-50 placeholder:text-sm"
            id="todayJob"
            name="today"
            placeholder="Press enter to save"
            value={tTask}
            onChange={onTypingTask}
          />
        </div>
      </form>
    </>
  )
}

export default CheckInOutForm
