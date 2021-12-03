import React from 'react'

export default function SystemBar() {
  return (
    <React.Fragment>
      <div className="absolute flex gap-2 m-4">
        <div className="w-4 h-4 rounded-full bg-red-500"></div>
        <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
        <div className="w-4 h-4 rounded-full bg-green-500"></div>
      </div>
      <div className="mt-2 mb-6">
        <h1 className="text-center text-xl text-gray-100 tracking-tighter">
          Activity monitor
        </h1>
      </div>
    </React.Fragment>
  )
}
