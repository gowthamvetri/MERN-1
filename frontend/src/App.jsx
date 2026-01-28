import React from 'react'
import Profile from './components/Profile'
import State from './hooks/State'
import Parent from './components/Parent'
import Form from './hooks/Form'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import NavBar from './components/NavBar'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'

const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        {/* <Route path='/' Component={State}/> */}
        <Route path='/home' Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/service' Component={Service}/>
        <Route path='/form' Component={Form}/>
        <Route path='/products' Component={Products}/>
        <Route path='/products/:id' Component={ProductDetails}/>

        
      </Routes>

    {/* <div className='px-5 py-3'>
      App
      <Profile name={"Gowtham"} skills={["Python","Java","JavaScript"]}/>
      <State/>
      <Parent/> 

      <Form/>
    </div> */}
    </>
  )
}

export default App