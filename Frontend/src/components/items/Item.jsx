import React from 'react'
import './item.css'
import { DarkMode } from '../../context/DarkMode'


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