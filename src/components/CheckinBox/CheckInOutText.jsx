import React, { useEffect, useState } from 'react'
import { todayDate, yesterdayDate } from '../../util/dateTime'
import SuccessBox from '../Common/SuccessBox'

const CheckInOutText = ({ data, goBack }) => {
  const [text, setText] = useState('')
  const [showSuccessBox, setShowSuccessBox] = useState(true)

  const copyText = () => {
    navigator.clipboard.writeText(text)
    setShowSuccessBox(true)
  }

  useEffect(() => {
    setText(`
Khant Lin Tun
_______________________________
${yesterdayDate}, (5:30PM)
--------------------------------
Check Out:${data?.yesterday.map((task, idx) => ` \n${idx + 1}) ${task}`)}

Khant Lin Tun
_______________________________
${todayDate}, (8:30 AM)
--------------------------------
Check In:${data?.today.map((task, idx) => `\n${idx + 1}) ${task}`)}
_______________________________

`)
  }, [data])

  return (
    <>
      <p className=" whitespace-pre-line">{text}</p>
      <div className="space-x-2">
        <button
          className="bg-purple-500 rounded-md shadow-sm p-2 hover:bg-purple-600 text-white w-[100px] self"
          onClick={goBack}
        >
          Go Back
        </button>
        <button
          className="bg-purple-500 hover:bg-purple-600 rounded-md shadow-sm p-2 text-white w-[100px] self"
          onClick={copyText}
        >
          Copy
        </button>
      </div>

      {showSuccessBox && (
        <>
          <SuccessBox
            successHeader={'Success'}
            successMessage={'Copied to Clipboard'}
            onClose={() => setShowSuccessBox(false)}
          />
        </>
      )}
    </>
  )
}

export default CheckInOutText
