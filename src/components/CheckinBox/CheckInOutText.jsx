import React, { useEffect, useState } from 'react'

const CheckInOutText = ({ data, goBack }) => {
  const todayTime = new Date()
  const yesterdayTime = new Date(todayTime)
  yesterdayTime.setDate(yesterdayTime.getDate() - 1)

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const days = ['Sun', 'Mon', 'Tue', 'Web', 'Thurs', 'Fri', 'Sat']

  const [text, setText] = useState('')
  console.log(todayTime.getDay())
  console.log(yesterdayTime.getMonth())
  useEffect(() => {
    setText(`
    Khant Lin Tun
    _______________________________
    ${yesterdayTime.getDate()} ${
      months[todayTime.getMonth()]
    } ${todayTime.getFullYear()} (${days[yesterdayTime.getDay()]}), (5:30PM)
    --------------------------------
    Check Out:${data?.yesterday.map((task) => ` \n- ${task}`)}

    Khant Lin Tun
    _______________________________
    ${todayTime.getDate()} ${
      months[todayTime.getMonth()]
    } ${todayTime.getFullYear()} (${days[todayTime.getDay()]}), (8:30 AM)
    --------------------------------
    Check In:${data?.today.map((task) => `\n- ${task}`)}
    _______________________________

    `)
  }, [data])

  return (
    <>
      <p className=" whitespace-pre-line">{text}</p>
      <button
        className="bg-purple-500 rounded-md shadow-sm p-2 text-white w-[100px] self"
        onClick={goBack}
      >
        Go Back
      </button>
    </>
  )
}

export default CheckInOutText
