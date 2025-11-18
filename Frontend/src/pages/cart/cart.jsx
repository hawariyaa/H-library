import React, { useContext } from 'react'
import Cart from '../../components/cart/Cart'
import { DarkMode } from '../../context/DarkMode'
import './cart.css'

function cart() {
  const {Dark} = useContext(DarkMode)
  return (
    <div className={`cartpage ${Dark}`}>
      <Cart />
    </div>
  )
}

export default cart