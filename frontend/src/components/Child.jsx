import React from 'react'

const Child = ({send}) => {
  return (
    <div className='mt-10'>
        <button onClick={()=>send("Hello from Server")}className='px-4 py-3 bg-blue-500 rounded-xl text-white'>
            Send Data
        </button>
    </div>
  )
}

export default Child