import React from 'react'

const SuccessBox = ({ successHeader, successMessage, onClose }) => {
  return (
    <div className="absolute top-1/2 left-1/2 bg-white/50  transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
      <div className="absolute space-y-3 top-1/2 left-1/2 overflow-hidden transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded-md pb-3">
        <div className="bg-green-500 px-5 py-2 text-white uppercase text-center">
          {successHeader}
        </div>
        <p className="px-5">{successMessage}</p>
        <button
          className="w-2/4 ml-[50%] transform -translate-x-1/2 bg-green-500 hover:bg-green-600 rounded-md px-3 py-1 text-white"
          onClick={onClose}
        >
          OK
        </button>
      </div>
    </div>
  )
}

export default SuccessBox
