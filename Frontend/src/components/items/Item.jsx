import React from 'react'
import './item.css'


function Item({image, category, price}) {
  return (
    <div className='item'>
       <img src={image} alt="book image" />
       <p>category: {category}</p>
       <p>price: {price} Birr</p>
    </div>
  )
}

export default Item