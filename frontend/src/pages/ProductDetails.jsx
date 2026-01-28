
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

const ProductDetails = () => {

  const {id} = useParams()
  const [products,setProducts] = useState({});
  
  // console.log(products)



  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`).then(res=>res.json()).then(data=>setProducts(data))
  })
  
  
  return (
    <div className='flex flex-col'>
      <h1>Product Details</h1>
      <h1>Name of the product : {products?.title}</h1>
      <h1>Price of the product : {products?.price}</h1>
      <h1 className='max-w-2xl'>Description of the product : {products?.description}</h1>

    </div>
  )
}

export default ProductDetails