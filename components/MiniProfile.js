import React from 'react'

function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
    <img
      className="w-16 h-16 rounded-full border p-[2px]"
      src="https://cdn.sanity.io/images/s4gdqrgm/production/9ca217c3d8e21d8fca561e502d56941584707a12-828x808.jpg"
      alt=""
    />
    <div className="flex-1 mx-4">
      <h2 className="font-bold">LeooMaii</h2>
      <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
    </div>
    <button className="text-blue-400 text-sm font-semibold">
      Sign Out
    </button>
  </div>
  )
}

export default MiniProfile