import React from 'react'
import './productDisplay.css'
import StarRating from './StarRating'

function ProductDisplay({image, name, Author, Discription, category, Edition, Language, File, contentType, year, publisher, page, ISBN, price}) {
  return (
    <div className='product-display'>
    <div className='product-section'>
       <img src={image} alt="product-image" />
       <div className="details">
         <h2>{name}</h2>
         <div className="rating">
          <p>Rating: </p><StarRating />
         </div>
         <p>Author: {Author}</p>
         <p>Discription: {Discription}</p>
        </div>
    </div>
    <div className='details-book'>
    <div className="about-book">
            <div className="part1">
                <p>category: {category}</p>
                <p>Edition: {Edition}</p>
                <p>Language: {Language}</p>
                <p>File: {File}</p>
            </div>
            <div className="part2">
                <p>content-Type: {contentType}</p>
                <p>Year: {year}</p>
                <p>publisher: {publisher}</p>
                <p>pages: {page}</p>
                <p>ISBN: {ISBN}</p>
            </div>
    </div>
     <div className="buy">
        <p>price: {price} Birr  <button>Buy know</button></p>   
        <button>Add to cart</button>
    </div>
    </div>
    </div>
  )
}

export default ProductDisplay