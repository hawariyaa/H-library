import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Signup from './pages/Signup/Signup'
import Product from './pages/Productview/Product'
import MyBooks from './pages/MYBooks/MyBooks'
import SellBooks from './pages/SellBooks/SellBooks'
import Cart from './pages/cart/cart'
import Profile from './pages/profile/profile'
import MyBookView from './pages/mybooksview/mybooksview'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/productview/:id' element={<Product />} />
        <Route path='/mybooks' element={<MyBooks />} />
        <Route path='/sellbooks' element={<SellBooks />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/profile' element={<Profile />}/>
        <Route path='/mybooksview/:id' element={<MyBookView />}/>
      </Routes>
    
  )
}

export default App
