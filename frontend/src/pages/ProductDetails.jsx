import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const ProductDetails = () => {

  const {id} = useParams()
   const products = [
    {id:1,name:"Laptop",price:20000,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsum libero maxime, esse omnis praesentium quia et eum saepe assumenda corrupti iste voluptatum asperiores voluptatibus. Fugit sunt qui magnam voluptatibus!"},
    {id:2,name:"Phone",price:2000,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsum libero maxime, esse omnis praesentium quia et eum saepe assumenda corrupti iste voluptatum asperiores voluptatibus. Fugit sunt qui magnam voluptatibus!"},
    {id:3,name:"Keyboard",price:200,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsum libero maxime, esse omnis praesentium quia et eum saepe assumenda corrupti iste voluptatum asperiores voluptatibus. Fugit sunt qui magnam voluptatibus!"},
    {id:4,name:"Mouse",price:100,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsum libero maxime, esse omnis praesentium quia et eum saepe assumenda corrupti iste voluptatum asperiores voluptatibus. Fugit sunt qui magnam voluptatibus!"},
    {id:5,name:"CPU",price:200000,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsum libero maxime, esse omnis praesentium quia et eum saepe assumenda corrupti iste voluptatum asperiores voluptatibus. Fugit sunt qui magnam voluptatibus!"},
  ]

  const product = products.find((prod)=>{
    return prod.id==id
  })
  
  return (
    <div className='flex flex-col'>
      <h1>Product Details</h1>
      <h1>Name of the product : {product.name}</h1>
      <h1>Price of the product : {product.price}</h1>
      <h1 className='max-w-2xl'>Description of the product : {product.description}</h1>

    </div>
  )
}

export default ProductDetails