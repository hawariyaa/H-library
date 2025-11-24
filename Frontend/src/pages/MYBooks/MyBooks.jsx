import React, { useContext } from 'react'
import NavBar from '../../components/navbar/NavBar'
import Item from '../../components/items/Item'
import popularbooks from '../../assets/books/books'
import './mybooks.css'
import { DarkMode } from '../../context/DarkMode'
import MyBookView from '../mybooksview/mybooksview'
import { Link } from 'react-router-dom'

function MyBooks() {
  const {Dark} = useContext(DarkMode)
  return (
    <div>
       <NavBar />
       <div className={`mybook-list ${Dark}`}>
        {popularbooks.map((book, index)=>{
            return (
               <Link to={`/mybooksview/${book.id}`} key={book.id}>
                <Item 
                  image={book.image}
                  category={book.category}
                  price={book.price}
                />
                </Link>
            )
        })}
       </div>
    </div>
  )
}

export default MyBooks