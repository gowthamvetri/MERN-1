import React from 'react'

const Profile = ({name,skills}) => {
  return (
    <div>
      <h1>Hello {name}. How are you ??</h1>
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