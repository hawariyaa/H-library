import React from 'react'
import { useParams } from 'react-router-dom'
import popularbooks from '../../assets/books/books'
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay'
import NavBar from '../../components/navbar/NavBar'
import './product.css'

function Product() {
  const {id} = useParams()
  const book = popularbooks.find((b)=>b.id === parseInt(id))
        
  return (
    <div>
       <NavBar />
        <ProductDisplay 
      image={book.image}
      name={book.name}
      Author={book.Author}
      Discription={book.description}
      category={book.category}
      Edition={book.Edition}
      Language={book.Language}
      File={book.File}
      contentType={book.contentType}
      year={book.year}
      publisher={book.publisher}
      page={book.pages}
      ISBN={book.ISBN}
      price={book.price}
        />
      <div className="comment">
        <h1>160 Comments</h1>
        <input type="text" placeholder="Add a comment..."/>
        <div className='comment-section'>
          {book.comment.map((com, index)=>{
            return(
              <p key={index}>- {com}</p>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Product