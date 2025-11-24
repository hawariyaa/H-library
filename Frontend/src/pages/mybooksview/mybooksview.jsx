import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import popularbooks from '../../assets/books/books'
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay'
import Profile from '../../assets/profile/profile'
import comments from '../../assets/comment/comments'
import NavBar from '../../components/navbar/NavBar'
import { DarkMode } from '../../context/DarkMode'
import Comment from '../../components/comment/Comment'
import MyBooksProduct from '../../components/mybooks/mybooksproduct'

function MyBookView() {
  const {Dark} = useContext(DarkMode)
  const {id} = useParams()
  const book = popularbooks.find((b)=>b.id === parseInt(id))
  const bookcomment = comments.filter(c => c.book_id === book.id)
        
  return (
    <div>
       <NavBar />
        <MyBooksProduct 
      id={book.id}
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
      <div className={`comment ${Dark}`}>
        <h1>160 Comments</h1>
        <input type="text" placeholder="Add a comment..."/>
        <div className='comment-section'>
          {bookcomment.map((comment)=>{
            let profile = Profile.find(p => p.id === comment.user_id)
            return(
               <Comment 
               key={comment.id}
               name={profile.name}
               image={profile.image}
               comment={comment.comment}
               />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MyBookView