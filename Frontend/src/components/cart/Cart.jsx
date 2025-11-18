import React, { useContext } from 'react'
import './cart.css'
import NavBar from '../navbar/NavBar'
import { BookContext } from '../../context/BookContext'
import Remove from '../../assets/cross_icon.png'
import cart from '../../pages/cart/cart'
import {DarkMode} from '../../context/DarkMode'


function Cart() {
  const {Dark} = useContext(DarkMode)
  const {cartItem,removecart, popularbooks} = useContext(BookContext)

  return (
    <div className={`cartItem ${Dark}`}>
       <NavBar />
       <div className="cart">
          <p>Books</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
       </div>
       <hr />
       {popularbooks.map((book, index)=>{
          if(cartItem[book.id]>0){
            return(
            <div className="cart">
              <img src={book.image} alt="book image" id='bookimage' />
              <p>{book.name}</p>
              <p>{book.price}</p>
              <p>{cartItem[book.id]}</p>
              <p>{cartItem[book.id]*book.price}</p>
              <img src={Remove} alt="remove icon" id='remove_icon' onClick={()=>{removecart(book.id)}} />
            </div>
            )
          }
       })}
    </div>
  )
}

export default Cart