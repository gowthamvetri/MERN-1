import React, { useState } from 'react'
import {Form, Link} from "react-router-dom"
import { userContext } from '../App'
import Profile from '../components/Profile'
import State from '../hooks/State'
import Parent from '../components/Parent'


const Home = () => {
  const [user,setUser] = useState("abs")

  return (
    <>
      <userContext.Provider value={{user:user,setUser:setUser}}>
        <div className='px-5 py-3'>
      App
      <Profile skills={["Python","Java","JavaScript"]}/>

    </div>
      </userContext.Provider>
      <Link to={'/reducer'}>Reducer</Link>
    </>
  )
}

export default Home