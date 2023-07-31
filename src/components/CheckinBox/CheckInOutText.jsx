import React, { useEffect, useState } from 'react'
import { todayDate, yesterdayDate } from '../../util/dateTime'

const CheckInOutText = ({ data, goBack }) => {
  const [text, setText] = useState('')

  useEffect(() => {
    setText(`
    Khant Lin Tun
    _______________________________
    ${yesterdayDate}, (5:30PM)
    --------------------------------
    Check Out:${data?.yesterday.map((task) => ` \n- ${task}`)}

    Khant Lin Tun
    _______________________________
    ${todayDate}, (8:30 AM)
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
