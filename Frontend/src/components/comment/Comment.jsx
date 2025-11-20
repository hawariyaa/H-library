import React from 'react'
import './comment.css'

function Comment({name, image, comment}) {
  return (
    <div className='comment-item'>
       <img src={image} alt="" />
       <div className="commentitem-right">
         <p>@{name}</p>
         <p>{comment}</p>
       </div>
    </div>
  )
}

export default Comment