import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {

  const products = [
    {id:1,name:"Laptop",price:20000},
    {id:2,name:"Phone",price:2000},
    {id:3,name:"Keyboard",price:200},
    {id:4,name:"Mouse",price:100},
    {id:5,name:"CPU",price:200000},
  ]

  return (
    <div>
      <h1>Products</h1>
      <ul className='list-decimal pl-5'>
      {
        products.map((val)=>(
          <li key={val.id} className='grid grid-cols-3 w-fit border-2 px-4 py-1'>
            <h1>{val.name}</h1>
            <h1>{val.price}</h1>
            <Link to={`/products/${val.id}`} >View Details</Link>
          </li>
        ))
      }
      </ul>
    </div>
  )
}

export default Products