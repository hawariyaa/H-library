import React, { useContext } from 'react'
import NavBar from '../../components/navbar/NavBar'
import Item from '../../components/items/Item'
import popularbooks from '../../assets/books/books'
import './mybooks.css'
import { DarkMode } from '../../context/DarkMode'

function MyBooks() {
  const {Dark} = useContext(DarkMode)
  return (
    <div>
       <NavBar />
       <div className={`mybook-list ${Dark}`}>
        {popularbooks.map((book, index)=>{
            return (
                <Item 
                  key={index}
                  image={book.image}
                  category={book.category}
                  price={book.price}
                />
            )
        })}
       </div>
    </div>
  )
}

export default MyBooks