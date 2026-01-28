import React, { useContext } from 'react'
import { userContext } from '../App'

const Profile = ({skills}) => {

  const name = useContext(userContext)
  console.log(name)

  return (
    <div>
      <h1>Hello {name.user}. How are you ??</h1>
      <ul className='list-decimal'>
      {
        skills.map((val)=>{
          return (
          <li>{val}</li>
        )
        })
      }
      </ul>
    </div>
  )
}

export default Profile