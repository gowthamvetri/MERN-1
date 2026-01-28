import React, { use, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

//useState sytax
//const [variable,setVsriable]  = useState(initialValue)
//state -> data that change over time.

const State = () => {

    const [count,setCount] = useState(0)
    const [like,setLike] = useState(0)
    const navigateion = useNavigate()
  
    useEffect(()=>{
      console.log("Hello")
    })

  return (


    <div>
        <h1 className='font-extrabold my-5'>State Exapmles</h1>
        <h1>Count : {count}</h1><br />
        <div className='flex gap-5'>
        <button onClick={()=>setCount(pre=>pre+1)} className='px-4 py-3 bg-blue-500 rounded-xl text-white'>Increase 👍</button>
        <button onClick={()=>setCount(pre=>pre-1)} className='px-4 py-3 bg-blue-500 rounded-xl text-white'>Decreaase 👎</button>
        </div>
        <br />
        <h1>Like : {like}</h1><br />
        <div className='flex gap-5'>
        <button onClick={()=>setLike(pre=>pre+1)} className='px-4 py-3 bg-blue-500 rounded-xl text-white'>👍</button>
        <button onClick={()=>setLike(pre=>pre-1)} className={`${count==0 ? "disabled:opacity-75":""}" px-4 py-3 bg-blue-500 rounded-xl text-white"`}>👎</button>
        </div>

        <button onClick={()=>navigateion("/form")}>To form page</button>
    </div>

  )
}

export default State