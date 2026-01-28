import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
    const nav = ["home","about","contact","service","form","products"]
    const getloc = useLocation();
  return (
    <div className='flex justify-center h-20 bg-gray-100/50'>
        <ul className='flex items-center justify-between max-w-2xl gap-10'>
            {
                nav.map((val,key)=>(
                    <li className={`${getloc.pathname.substring(1)==val ? " bg-blue-500 rounded-xl text-white hover:bg-blue-600" : "hover:bg-gray-200 rounded-xl"} px-4 py-3 font-bold transition-all delay-15 `} key={key}><Link to={`/${val}`}>{val.toUpperCase()}</Link></li>
                ))
            }
        </ul>
    </div>
  )
}

export default NavBar