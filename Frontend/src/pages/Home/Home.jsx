import React, { useContext } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import NavBar from '../../components/navbar/NavBar'
import Hero from '../../components/Hero/Hero'
import popularbooks from '../../assets/books/books'
import Item from '../../components/items/Item'
import { DarkMode } from '../../context/DarkMode'

function Home() {
  const {Dark} = useContext(DarkMode)
  return (
    <>
        <NavBar />
        <Hero  />
        <div className={`most-popular ${Dark}`}>
           <h2>Most popular</h2>
           <hr />
        </div>
        <div className={`the-books ${Dark}`}>
          {popularbooks.map((book, index)=>(
            <Link to={`/productview/${book.id}`} key={book.id}>
            <Item 
             key={index}
             image={book.image}
             category={book.category}
             price={book.price}
            />
            </Link> 
          ))}       
        </div>
    </>
  )
}

export default Home