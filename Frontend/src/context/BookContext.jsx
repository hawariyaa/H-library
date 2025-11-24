import React, {createContext, useContext, useState} from 'react'
import popularbooks from '../assets/books/books'

export const BookContext = createContext(null)
const getDefaultCart = () =>{
    let cart = {}
    for (let index = 0; index < popularbooks.length; index++) {
      cart[index] = 0       
    }
    return cart
  }

function BookContextProvider(props) {
  const [toast, settoast] = useState(false)
  const [cartItem, setcartItem] = useState(getDefaultCart())
 
  //...prev keeps all the previous items(copies them), then the prev[itemId] represents the previous value that exists
  //then we add 1 on the previous value that existed, To tell JS you mean an object, you must wrap it in parentheses:
  //in an arrow function, so if it's curly braces i need the key word return but if i use () i don't need the
  //key word return it would just return whats inside, also you have to put objects inside {} just like we did
  //bellow the cartItem is an object so when setting it in we use {}
  const addCart = (itemId) =>{
     setcartItem((prev)=>({...prev, [itemId]:prev[itemId]+1}))
     settoast(!toast)
  }
  const removecart = (itemId) =>{
     setcartItem((prev)=>({...prev, [itemId]:prev[itemId]-1}))
  }
   const BookValue = {popularbooks, cartItem, addCart, removecart, setcartItem, toast}
  
  return (
    //context provider should always be capitalized, like Provider
   <BookContext.Provider value={BookValue}>
      {props.children}
   </BookContext.Provider>
  )
}

export default BookContextProvider