import React, { useEffect, useState } from 'react'

const About = () => {
  const [users,setUsers] = useState([]);


  useEffect(()=>{
    fetch('https://fakestoreapi.com/users')
  .then(response => response.json())
  .then(data => setUsers(data));
  })


  return (

    <>
    <div className='text-center'>'
      <h1 className='text-2xl mb-5'>About Users</h1>
      </div>
    <div className='flex items-center flex-col'>
      <ul className='flex flex-col justify-center'>
        <li className='grid grid-cols-4 items-center border gap-10 px-2 py-1.5 font-bold capitalize'>
          <li>email</li>
          <li>username</li>
          <li>firstname</li>
          <li>lastname</li>
        </li>
        {users.map((user)=>(
        <li className='grid grid-cols-4 items-center border gap-10 px-2 py-1.5'>
          <li>{user.email}</li>
          <li>{user.username}</li>
          <li>{user.name.firstname}</li>
          <li>{user.name.lastname}</li>
        </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default About