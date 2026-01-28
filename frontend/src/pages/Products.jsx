import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {

  const [products,setProducts] = useState([])

  useEffect(()=>{
    const res = fetch('https://fakestoreapi.com/products').then((data)=>data.json()).then((data)=>setProducts(data))
  })

  return (
    <div>
      <h1 className='text-center text-2xl mb-5'>Products</h1>
      <ul className='list-decimal pl-5 items-center flex flex-col'>
      {
        products.map((val)=>(
          <li key={val.id} className='grid grid-cols-4 w-[50%] border-2 px-4 py-1 items-center'>
            <h1 className='text-justify'>{val.title}</h1>
            <h1 className='text-center'>{val.price}</h1>
            <h1 className='text-justify'>{val.description}</h1>
            <Link to={`/products/${val.id}`} className='text-center'>View Details</Link>
          </li>
        ))
      }
      </ul>
    </div>
  )
}

export default Products