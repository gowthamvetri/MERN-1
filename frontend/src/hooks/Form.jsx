import React, { useState } from 'react'

function Form() {

    const [form,setForm] = useState({
        name:"",
        email:"",
        age:"",
        department:"",
        year:"I"
    })

    const handleChange = (e)=>{
        const name = e.target.name
        const val = e.target.value
        setForm((data)=>({
            ...data,[name]:val
        }))
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        console.log(form)
    }

  return (
    <div className='flex flex-col items-center justify-center mt-10'>
        <h1 className='font-bold text-xl mb-5'>Form Data</h1>
        <form className='flex flex-col gap-5 mb-5 border border-gray-400 p-5 rounded'>
        <div>
            <label htmlFor="name">Enter your name: </label>
            <input className="border-gray-400 border rounded-md pl-1" type="text" id='name' name='name'  value={form.name} placeholder='Alex' onChange={(e)=>handleChange(e)}/>
        </div>
        <div>
            <label htmlFor="email">Enter your email: </label>
            <input className="border-gray-400 border rounded-md pl-1" type="email" id='email' value={form.email} name='email' placeholder='alex@xyz.com' onChange={(e)=>handleChange(e)}/>
        </div>
        <div>
            <label htmlFor="age">Enter your age: </label>
            <input className="border-gray-400 border rounded-md pl-1" type="number" id='age' name='age' value={form.age} placeholder='23' onChange={(e)=>handleChange(e)} />
        </div>
        <div>
            <label htmlFor="department">Enter your department: </label>
            <input className="border-gray-400 border rounded-md pl-1" type="text" id='department' name='department' value={form.department} placeholder='CSE' onChange={(e)=>handleChange(e)}/>
        </div>
        <div>
            <label htmlFor="year">Enter your year: </label>
            <select name="year" id="year" value={form.year} onChange={handleChange}>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
            </select>
        </div>

        <button className='px-4 py-2 bg-blue-500 rounded-xl text-white w-full' onClick={handleSubmit} type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form