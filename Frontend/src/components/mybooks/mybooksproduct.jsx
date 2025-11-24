import React, { useContext, useState } from 'react'
import './mybooksproduct.css'
import  StarRating from './starRating'
import { BookContext } from '../../context/BookContext'
import { BsCart3 } from "react-icons/bs";
import { DarkMode } from '../../context/DarkMode';

function MyBooksProduct({id, image, name, Author, Discription, category, Edition, Language, File, contentType, year, publisher, page, ISBN, price}) {
  const {Dark} = useContext(DarkMode)
  const {addCart, cartItem, toast} = useContext(BookContext)
  
  
  return (
    <div className={`product-display ${Dark}`}>
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
     <div className="Ratingbook">
        <p>Give a Rating for the Book: </p>
        <div className="Rating">
          <StarRating />
        </div>
        
    </div> 
    </div>
    <div className={`toastbox ${toast}`}>
      <button><BsCart3 />Successfuly Added to cart!</button>
    </div>
    </div>
  )
}

export default MyBooksProduct