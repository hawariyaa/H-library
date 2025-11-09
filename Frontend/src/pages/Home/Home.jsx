import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import NavBar from '../../components/navbar/NavBar'
import Hero from '../../components/Hero/Hero'
import popularbooks from '../../assets/books/books'
import Item from '../../components/items/Item'

function Home() {
  return (
    <>
        <NavBar />
        <Hero  />
        <div className="most-popular">
           <h2>Most popular</h2>
           <hr />
        </div>
        <div className="the-books">
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