import React from 'react'
import './home.css'
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
            <Item 
             key={index}
             image={book.image}
             category={book.category}
             price={book.price}
            />
          ))}
        </div>
    </>
  )
}

export default Home